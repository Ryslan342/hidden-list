import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HiddenListLibModule} from 'hidden-list-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HiddenListLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
