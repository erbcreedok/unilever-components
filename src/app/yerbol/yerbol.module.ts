import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YerbolComponent } from './yerbol.component';
import {YerbolRoutingModule} from './yerbol-routing.module';

@NgModule({
  imports: [
    CommonModule,
    YerbolRoutingModule
  ],
  declarations: [YerbolComponent],
  exports: [YerbolComponent]
})
export class YerbolModule { }
