import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  @Input() index: number;
  @Input() id: number;
  @Output() categoryValue = new EventEmitter<String[]>();
  
  constructor() { }

  ngOnInit() {
  }

  selectChangeHandler(selectedTag) {
    var selectedValue = [];
    selectedValue.push({id: this.id, categoryValue: selectedTag});
    console.log(selectedValue);
    this.categoryValue.emit(selectedValue);
  }
}
