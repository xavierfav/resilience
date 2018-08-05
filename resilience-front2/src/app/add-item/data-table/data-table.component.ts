import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataTableService } from './data-table.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() id: number;
  @Input() categoryDatas: any[] = [];
  @Input() rowDatasHeader: any[] = [];
  headers: number;

  rowDatas: any; 
  editUrlCell: any;
  editNameCell : any;
  editDescriptionCell: any;

  constructor(private dataTableService: DataTableService) { }

  ngOnInit() {
    
  }

  ngOnChanges() {
    if (this.id !== undefined) {
      this.dataTableService.getOneReference(this.id).
      subscribe(
        (reference) => {
          console.log('Request getOneReference successful', reference);
          this.rowDatas.push(reference);
          console.log(this.rowDatas);
        },
        (error) => {
          console.log('Error performing request', error);
        }
      );
    }
  }
    
  editReference(rowId) {
    if (this.headers === 1) {
      this.editUrlCell = rowId;
    } else if (this.headers === 2) {
      this.editNameCell = rowId;
    } else if (this.headers === 3) {
      this.editDescriptionCell = rowId
    }
    
  }
    // this.rowDatas.push({ url: this.gridData[0].url, name: this.gridData[1].name }, { categoy: this.categoryData });
    // console.log(this.gridData);
    // this.gridData.forEach((item) => {
    //   console.log(item);
    //   this.rowDatas.push(item);
    // })
    //   console.log(this.rowDatas);
    // }

}



  
