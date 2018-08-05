import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataTableService {
  url: any = 'api/references';

  constructor(private httpClient: HttpClient) { }

  getReferences() {
    return this.httpClient.get(this.url);
  }

  getOneReference(id) {
    return this.httpClient.get(this.url + '/' + id);
  }

  deleteReference(id) {
    return this.httpClient.delete('http://localhost:8000/references_table/:' + id);
  }
}
