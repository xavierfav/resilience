import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { AddItemService } from './accordion-form/add-item.service';
import { ReferencesImpl } from '../shared/ReferencesImpl.model';
import { NgbAccordion, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  isSubmited: boolean = false;
  categories: any [] = [];
  index: number = 0;
  category: any[] = [];
  categoryDatas: any[] = [];
  reference: any;
  references: any;
  idRef: number;
  showForm: boolean;
  refs: any[] = [];
  title: any[] = [];
  @ViewChild('acc') accordionComponent: NgbAccordion;

  constructor(private addItemService: AddItemService) { }

  ngOnInit() {
    this.addItemService.getReferences()
    .pipe(
      map(references => references.map(i => new ReferencesImpl(i)))
    )
    .subscribe(
      (references) => {
        console.log('Request successful', references);
        if (references != null) {
          references.forEach((reference) => {
            this.refs.push({ id: reference.id, name: reference.name, url: reference.url, description: reference.description });
          })
          this.index = references[references.length - 1].id;
          console.log(this.index);
        }
      },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }

  addReference() {
      this.refs.push({id: this.index++, name: 'New Reference', url: 'New URL', description: 'New Description' });
      console.log(this.refs);
  }

  onTogglePanel(value, i) {
    console.log(value);
    if (value !== undefined) {
      this.refs[i].name = value.name;
      this.refs[i].url = value.url;
      this.refs[i].description = value.description;
    } 
  }

  getReference(index) {
    this.addItemService.getOneReference(index)
      .subscribe(
        (reference) => {
        console.log ('Request getOneReference successful', reference);
      },
        (error) => console.log('ERROR request getOneReference', error)
      );
  }
  

   toggleAccordion(props: NgbPanelChangeEvent): void {
    props.nextState // true === panel is toggling to an open state 
                               // false === panel is toggling to a closed state
    props.panelId = props.panelId.split('ngb-panel-')[1];  // the ID of the panel that was clicked
    if (props.nextState == true) {
      this.getReference(+props.panelId + 1);
    }
    
    // this.refs.push({ id: this.reference.id, name: this.reference.name, url: this.reference.url, description: this.reference.description });
    //props.preventDefault(); // don't toggle the state of the selected panel
 }
}
