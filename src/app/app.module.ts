// import {BrowserModule} from '@angular/platform-browser';
// import {NgModule} from '@angular/core';
// import {RouterModule} from '@angular/router';
// import {LazyModule} from './lazy/lazy.module';
// // import {LazyComponent} from './lazy/lazy.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import {TransferHttpCacheModule} from '@nguniversal/common';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     LazyModule
//   ],
//   imports: [
//     BrowserModule.withServerTransition({appId: 'my-app'}),
//     RouterModule.forRoot([
//       { path: '', component: HomeComponent, pathMatch: 'full'},
//       { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
//       { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
//     ]),
//     TransferHttpCacheModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
/************************ */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { HttpModule } from '@angular/http';
// import { LazyModule, LazyComponent } from './lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [ BrowserModule,
    HttpModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      // { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      // { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
