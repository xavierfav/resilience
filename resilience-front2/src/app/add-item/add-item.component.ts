import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { AddItemService } from './accordion-form/add-item.service';
import { ReferencesImpl } from '../shared/ReferencesImpl.model';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  index: any = 0;
  refs: any[] = [];
  createOrUpdate: string = 'Update Reference';
  step: number;

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
            this.refs.push({ id: reference.id, name: reference.name, url: reference.url, description: reference.description, category: reference.category });
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
  addReference() {
      this.refs.push({id: this.index + 1, name: '', url: '', description: '' });
      console.log('references value when adding new', this.refs);
      this.index++;
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
  
  preventOpening(event:Event) {
    event.preventDefault();
    console.log("Clicked");
    event.stopPropagation();
  }

  setStep(index: number) {
    this.step = index;
    this.shouldGetRef(this.step);
  }

  nextStep() {
    this.step++;
    this.shouldGetRef(this.step);
  }

  prevStep() {
    this.step--;
    this.shouldGetRef(this.step);
  }

  shouldGetRef(index){
     if (this.refs[index].url === '') {
      this.createOrUpdate = 'Create Reference';
    } else {
      this.getReference(this.refs[index].id);
      this.createOrUpdate = 'Update Reference';
    }
  }

  deleteReference(index) {
    console.log('index to delete', index);
    this.addItemService.deleteReference(index)
      .subscribe(
        (ref: any) => { 
          console.log('Delete success', ref);
        },
        (error) => {
          console.log('ERROR', error);
        }
      );
    this.refs.splice(index, 1);
  }
}
