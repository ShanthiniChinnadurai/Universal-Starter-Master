import {Component, OnInit} from '@angular/core';
import { Http  } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import {HomeService} from './home.service';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}</h3>
  <button type="button" class="btn btn-outline-success" (click)="newevent()" >Success</button>
  <br>https://blog.angular-university.io/angular-universal/
  https://github.com/angular/universal
  https://github.com/angular/universal-starter
  `
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor( private obj: HomeService , private http: HttpClient) { }

  ngOnInit() {
    this.message = 'Hello';

  }

  newevent() {
    console.log('Success button clicked');
    this.obj.servcall();
    // const headers = new Headers({ 'Content-Type': 'application/json' });
    // this.http.post('http://127.0.0.1:8080/ping', {
    // })
    // .subscribe(data => {
    //   console.log(data);
    // });
  }
}
