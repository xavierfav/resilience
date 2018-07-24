import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input() gridData;

	rowDatas: any[] = []; 
  rowDatasHeader: any[] = [];
  
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.rowDatasHeader = [
		  { url: 'URL', name: 'Name'},
    ]
  }

  ngOnChanges() {
    if (this.gridData.url != undefined) {
      this.rowDatas.push({ url: this.gridData.url, name: this.gridData.name });
      console.log(this.rowDatas);
    }
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
  
}
