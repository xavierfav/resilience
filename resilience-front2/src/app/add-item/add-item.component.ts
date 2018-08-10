import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EventEmitter } from 'events';
import { DataTableService } from './data-table/data-table.service';
import { AddItemService } from './accordion-form/add-item.service';
import { ReferencesImpl } from '../shared/ReferencesImpl.model';

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
  referencessSubscription: any;
  timerSubscription: any;
  idRef: number;
  showForm: boolean;
  refs: any[] = [];
  title: any[] = [];
  //@ViewChild('name') name: ElementRef;

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
      this.refs.push({id: this.index++, name: 'New Reference' });
      console.log(this.refs);
  }

  onNameEdit(value, i) {
    console.log(value);
    if (value !== undefined) {
      this.refs[i].name = value;
    } 
  }

 

  // private refreshData(): void {
  //   this.referencessSubscription = this.dataTableService.getOneReference(this.references.id).subscribe(reference => {
  //       this.references = reference;
  //       console.log('Request getOneReference successful', reference);
  //       this.subscribeToData();
  //   });
  // }

  // private subscribeToData(): void {
  //     this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
  // }
  
}
