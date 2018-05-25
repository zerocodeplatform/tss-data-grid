import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TssGridModule } from 'projects/tss-grid/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TssGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
