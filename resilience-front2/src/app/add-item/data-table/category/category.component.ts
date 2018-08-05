import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryData: any[] = [];
  categoryDatas: any[] = [];
  @Input() gridCategoryData: any;
  constructor() { }

  ngOnInit() {
    console.log(this.gridCategoryData);
    this.categoryData = this.gridCategoryData[0];
  }

   ngOnChanges() {
  //   // console.log(this.gridCategoryData);
  //   // if (this.gridCategoryData != undefined) {
  //   //   this.gridCategoryData.forEach((item, index) => {
  //   //     var i = 0;
  //   //     console.log(item, index);
  //   //     //this.categoryData[index] = item[0].categoryValue;
  //   //       this.categoryData = item[i].categoryValue;
  //   //       if (this.categoryDatas[index] !== undefined && item[i].id === this.categoryDatas[index].id) {
  //   //         this.categoryDatas.splice(this.categoryDatas.indexOf(index), 1);
  //   //       }
    //       this.categoryDatas.push({id: index, categoryId: this.categoryData });
    //       this.categoryData = [];
  //   //     });
  //   // }
  // }
    
}
}
