import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @Input() index: number;
  @Input() i: number;
  @Output() tagValue = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  selectChangeHandler(event: any) {
    let selectedValue = event.target.value;
    this.tagValue.emit(selectedValue);
  }
}
