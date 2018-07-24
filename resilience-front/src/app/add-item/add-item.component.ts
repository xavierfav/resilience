import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SearchService } from './search.service';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  gridData: any[] = [];
  isSubmited: boolean = false;
  categories: any [] = [];
  index: number = 0;
  tagValue: String;
  categoryId = {};
  indexBuf: number = 0;
  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
    
  }

  addCategory() {
    this.categories.push({id: this.index++});
    console.log(this.categories);
  }

  onSelected(value: String) {
    // for (const prop of Object.keys(this.categoryId)) {
    //   delete this.categoryId[prop];
    // }
    this.tagValue = value;
    console.log(this.tagValue);
    //this.categories.splice(1);
    Object.keys(this.categories).forEach((key)=> {
      
      this.categoryId['category' + key] = this.tagValue;
      // let indexId = this.gridData.indexOf(this.categoryId['category' + key]);
      // if (indexId != 1) {
        console.log(this.categoryId);
        //this.gridData.splice(0, 1, this.categoryId['category' + key]);
        this.gridData.splice(0, 1, this.categoryId);
      }
    );
    
    
    
    
    
    
  }

  onSubmit(form: NgForm) {
    let categoryId = 'category' + this.index;
    this.gridData.push({url: form.value.url});
    this.gridData.push({name: form.value.name});
    

    console.log(this.gridData);
    
    //this.router.navigate['display'];
    //this.searchService.sendParameters(this.gridData);
  }
}
