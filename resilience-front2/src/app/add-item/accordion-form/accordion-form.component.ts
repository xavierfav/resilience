import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddItemService } from './add-item.service';

@Component({
  selector: 'app-accordion-form',
  templateUrl: './accordion-form.component.html',
  styleUrls: ['./accordion-form.component.css']
})
export class AccordionFormComponent implements OnInit {

  @Input() index:number;
  @Input() i: number;
  @Output() name = new EventEmitter<string[]>()
  categories: any;
  category: any;
  reference: any;
  references: any;
  idRef: number;

  constructor(private addItemService: AddItemService) { }

  ngOnInit() {
    this.addItemService.getReferences()
    // .pipe(map(
    //   (data: any) => JSON.parse(data)
    // ))
    .subscribe(
      (data) => {
        console.log('Request successful', data);
        this.references = data;
      },
      (error) => {
        console.log('ERROR', error);
      }
    ); 
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
        (data) => {
          console.log('Request sendReferences successful', data);
          this.references = data;
          this.idRef = this.references.id
          console.log(this.idRef);
          //this.refreshData();
        },
        (error) => {
          console.log('ERROR', error);
        });
  }
  onSubmit(form: NgForm) {
    this.reference = { url: form.value.url, name: form.value.name, description: null, category: []};
    
    this.addReferences(this.reference);
    
  }
}
