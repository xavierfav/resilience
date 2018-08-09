import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { EventEmitter } from 'events';
import { DataTableService } from './data-table/data-table.service';

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
  references: any;
  reference: any;
  referencessSubscription: any;
  timerSubscription: any;
  idRef: number;
  showForm: boolean;
  refs: any[] = [];
  title: any[] = [];
  @ViewChild('name') name: ElementRef;

  constructor(private dataTableService: DataTableService, private router: Router) { }

  ngOnInit() {
    
  }

  addReference() {
    this.refs.push({id: this.index++, panelTitle: 'New Reference' });
    console.log(this.refs);
  }

  onNameEdit(value) {
    if (value !== undefined) {
      this.refs[this.index - 1].panelTitle = value;
    } 
    console.log(this.title);
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
