import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProfileWindowComponent} from './profile/profile-window/profile-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
