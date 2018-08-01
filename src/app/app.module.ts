import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular/release/element-angular.module';
import { BekzhanModule } from './bekzhan-components/bekzhan.module';
import { YerbolModule } from './yerbol-components/yerbol.module';

import { ProfileWindowComponent } from './profile/profile-window/profile-window.component';

import 'element-angular/theme/index.css'

@NgModule({
  declarations: [
    AppComponent,
    ProfileWindowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    BekzhanModule, // Тестовый модуль Бекжана подгружается с bekzhan.module.ts
    YerbolModule, // Тестовый модуль Ербола подгружается с yerbol.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
