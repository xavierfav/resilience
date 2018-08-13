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
  index: any = 0;
  category: any[] = [];
  categoryDatas: any[] = [];
  reference: any;
  references: any;
  idRef: number;
  showForm: boolean;
  refs: any[] = [];
  title: any[] = [];
  lastCreated: any = [];
  createOrUpdate: string;
  submit: boolean;

  constructor(private addItemService: AddItemService) { }

  // OnInit component => get all the references from the DB
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

  // Add new reference on clic 'Add Reference'
  addReference(acc :NgbAccordion) {
      this.refs.push({id: this.index + 1, name: '', url: '', description: '' });
      console.log('references value when adding new', this.refs);
      this.lastCreated = 'ngb-panel-' + (this.index + 1);
      this.index++;
      this.createOrUpdate = 'Create Reference';
  }

  // When panel is open, display the values
  onTogglePanel(value, i) {
    console.log(value);
    if (value !== undefined) {
      this.refs[i].id = value.id;
      this.refs[i].name = value.name;
      this.refs[i].url = value.url;
      this.refs[i].description = value.description;
    } 
  }

  // subscription to display one reference into the panel given the ID
  getReference(index) {
    this.addItemService.getOneReference(index)
      .subscribe(
        (reference) => {
        console.log ('Request getOneReference successful', reference);
      },
        (error) => console.log('ERROR request getOneReference', error)
      );
  }
  
  isSubmitted(value) {
    this.submit = value;
  }

  // Manage the colors and create/update button when toggling panels
   toggleAccordion(props: NgbPanelChangeEvent, acc: NgbAccordion): void {
     console.log(acc);
     acc.type = 'default';
     var index = props.panelId.split('ngb-panel-')[1]; 
    if (props.nextState == true && this.refs[index].url != '') {
      this.getReference(+index);
      acc.type = 'secondary';
      this.createOrUpdate = 'Update Reference';
      this.lastCreated = 'ngb-panel-' + (index);
    } else if (props.nextState == true && this.refs[index].url == ''){
      acc.type = 'secondary';
      this.createOrUpdate = 'Create Reference';
      this.lastCreated = 'ngb-panel-' + (index);
    } else {
      acc.toggle;
      acc.type = 'default';
    }
  }
}
