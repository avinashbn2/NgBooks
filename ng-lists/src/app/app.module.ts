import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
