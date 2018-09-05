import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UnileverUiModule} from '../../shared/unilever-ui/unilever-ui.module';
import {ElModule} from 'element-angular/release/element-angular.module';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot(),
    UnileverUiModule,
    GalleryRoutingModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
