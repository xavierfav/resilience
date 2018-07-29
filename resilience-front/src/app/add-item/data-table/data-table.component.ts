import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { DataTableService } from './data-table.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() gridData: any[] = [];
  @Input() categoryDatas: any[] = [];
  @Input() rowDatasHeader: any[] = [];
  
  rowDatas: any; 

  constructor(private dataTableService: DataTableService) { }

  ngOnInit() {
    this.dataTableService.onLoad()
      .pipe(map(
        (data: any) => JSON.parse(data)
      ))
      .subscribe(
        (data) => {
          console.log('Request successful', data);
          this.rowDatas = data;
        },
        (error) => {
          console.log('ERROR', error);
        }
      );
  }

  ngOnChanges() {
    
    console.log(this.gridData);
    //this.rowDatas = [];
    //this.rowDatas.push({ url: this.gridData[0].url, name: this.gridData[1].name });
    //this.categoryData = [];
   
        //this.categoryData = [];
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



  // dataLoad() {
  //   this.searchService.sendParameters(this.gridData)
  //     .subscribe(
  //       (data) => { console.log(data) },
  //       (error) => { console.log('erreur de transmission de data') }
  //     );
  //   this.rowDatas.push({ url: this.gridData.url, name: this.gridData.name });
  //   console.log(this.rowDatas);
  // }
  
