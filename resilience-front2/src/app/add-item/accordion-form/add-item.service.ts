import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { References } from '../../shared/references.model';

// import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddItemService {

  url: any = 'api/references';
  csrfToken: any;
  headers: any;
  options: any;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { 
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSRFToken': this.getCookie()
    });
  }

  getCookie() {
    let csrf = this.cookieService.get("csrftoken");
    // the Angular HttpHeaders class throws an exception if any of the values are undefined
    if (typeof(csrf) === 'undefined') {
      csrf = '';
    }
    console.log(csrf);
   return csrf;
  }

  sendReferences(data) {
    this.options = { headers: this.headers};
    //let body = JSON.stringify(data);
    return this.httpClient.post(this.url, data, this.options);
  }

  getReferences() {
    return this.httpClient.get<References[]>(this.url);
  }

  getOneReference(id) {
    return this.httpClient.get<References>(this.url + '/' + id);
  }
}
