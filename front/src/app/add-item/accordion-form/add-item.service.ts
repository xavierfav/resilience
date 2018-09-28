import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { References } from '../../shared/references.model';


@Injectable()
export class AddItemService {

  url: any = 'http://localhost:8000/api/reference/';
  csrfToken: any;
  headers: any;
  options: any;

  // build the header
  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSRFToken': this.getCookie(),
       observe: 'response'
    });
  }

  // get the csrf cookie
  getCookie() {
    let csrf = this.cookieService.get("csrftoken");
    // the Angular HttpHeaders class throws an exception if any of the values are undefined
    if (typeof(csrf) === 'undefined') {
      csrf = '';
    }
    console.log(csrf);
   return csrf;
  }

  // send a new reference (post)
  sendReferences(data) {
    this.options = { headers: this.headers};
    return this.httpClient.post<References>(this.url, data, this.options);
  }

  // update an existing reference (put)
  updateReference(data) {
    this.options = { headers: this.headers};
    return this.httpClient.put<References>(this.url + data.id + '/', data, this.options);
  }

  // get all the references (get)
  getReferences() {
    return this.httpClient.get<References[]>(this.url);
  }

  // get one reference given the id (get)
  getOneReference(id) {
    return this.httpClient.get<References>(this.url + id + '/');
  }

  // delete a reference given the id (delete)
  deleteReference(id) {
    return this.httpClient.delete(this.url + id + '/');
  }
}
