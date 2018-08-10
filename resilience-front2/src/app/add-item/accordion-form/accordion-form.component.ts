import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddItemService } from './add-item.service';
import { map } from 'rxjs/operators';
import { References } from '../../shared/References.model';
import { ReferencesImpl } from '../../shared/ReferencesImpl.model';

@Component({
  selector: 'app-accordion-form',
  templateUrl: './accordion-form.component.html',
  styleUrls: ['./accordion-form.component.css']
})
export class AccordionFormComponent implements OnInit {

  @Input() index:number;
  @Input() id: number;
  description: any;
  name: any;
  url: any;
  @Output() panel = new EventEmitter<String>();
  //@Output() refs = new EventEmitter<References>();;
  categories: any;
  category: any;
  reference: any;
  @Input() references: any;
  uniqueReference;
  idRef: number;
  title: any;
  isFormSubmitted: boolean = false;

  constructor(private addItemService: AddItemService) { }

  ngOnInit() {
     console.log(this.references);
  }

  ngOnChanges() {
    this.url = this.references.url;
    this.name = this.references.name;
    this.description = this.references.description;
  }

  addCategory() {
    this.categories.push({id: this.index++});
    console.log(this.categories);
  }

  onSelected(value: any) {
    console.log(value);
    this.category.forEach((item) => {
      if (item[0] !== undefined && item[0].id !== undefined && item[0].id === value[0].id) {
          this.category.splice(this.category.indexOf(item), 1);
      } 
    });
    this.category.push(value);
  }

  addReferences(reference) {
    this.addItemService.sendReferences(reference)
      
      .subscribe(
        (ref: any) => {
          console.log('Request sendReferences successful', ref);
          //this.references = ref;
          //this.idRef = this.ref.id
          //console.log(ref);
          //this.refs.push(ref);
          //this.refs.emit(ref);
          this.name = ref.name;
          this.url = ref.url;
          this.description = ref.description;
        },
        (error) => {
          console.log('ERROR', error);
        });
  }

  onSubmit(form: NgForm) {
    //this.reference = { id: form.value.i, url: form.value.url, name: form.value.name, description: form.value.description, category: []};
    this.reference = form.value;
    this.addReferences(this.reference);
    this.panel.emit(this.reference);
    this.isFormSubmitted = true;
    form.form.markAsPristine;
  }
}
