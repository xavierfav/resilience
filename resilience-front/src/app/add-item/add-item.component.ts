import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddItemService } from './add-item.service';
import { RouterModule, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { EventEmitter } from 'events';

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
  rowHeader: any[] = [];
  categoryDatas: any[] = [];
  references: any;
  
  
  constructor(private addItemService: AddItemService, private router: Router) { }

  ngOnInit() {
    this.rowHeader.push({ url: 'URL'});
    this.rowHeader.push({ name: 'Name' });
  }

  addCategory() {
    this.categories.push({id: this.index++});
    this.rowHeader.push({ category: 'Category' + this.index});
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

  addReferences(references) {
    this.addItemService.sendUrlAndNameJSON(references)
      .subscribe(
        (data) => {
          console.log('Request successful', data);
        },
        (error) => {
          console.log('ERROR', error);
        });
  }

  onSubmit(form: NgForm) {
    this.categoryDatas = [];
    this.references = [ {fields: {name: form.value.name, description: null, url: form.value.url, category: []}}];
    this.categoryDatas = this.category;
    
    this.addReferences(this.references);
    this.isSubmited = true;
  }
}
