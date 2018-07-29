import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataTableService {

  constructor(private httpClient: HttpClient) { }

  onLoad() {
    return this.httpClient.get('http://localhost:8000/references_table/');
  }
}
