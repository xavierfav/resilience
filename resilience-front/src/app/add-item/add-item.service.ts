import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

// import { HttpClient } from '@angular/common/http';

@Injectable()
export class AddItemService {

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

  sendUrlAndNameJSON(data) {
    this.options = { headers: this.headers, withCredentials: true };
    let body = JSON.stringify(data);

    return this.httpClient.post('http://localhost:8000/references_table/', body, this.options);
  }

  // sendCategoryJSON(data) {
  //   this.httpClient.post('http://localhost:8000/categories', data)
  //     .subscribe(
  //       (data) => {
  //         console.log('Request category successful', data);
  //       },
  //       (error) => {
  //         console.log('ERROR', error);
  //     });
  // }
}
