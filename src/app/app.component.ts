import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Angular Universal</h1>
  <a routerLink="app-home">Home</a>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
