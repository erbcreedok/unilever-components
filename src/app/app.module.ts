import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular/release/element-angular.module';
import {BekzhanModule} from './bekzhan/bekzhan.module';
import {YerbolModule} from './yerbol/yerbol.module';
import { AppComponent } from './app.component';

import { ProfileWindowComponent } from './profile/profile-window/profile-window.component';
import 'element-angular/theme/index.css';

@NgModule({
  declarations: [
    AppComponent,
    ProfileWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    BekzhanModule,
    YerbolModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
