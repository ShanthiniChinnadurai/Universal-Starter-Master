import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  servcall() {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    this.http.get('http://127.0.0.1:8080/ping')
    .subscribe ((response) => {
      console.log(response);
      return response;

    }

      );
 }
}
