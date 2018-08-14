import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  exports: [
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  declarations: []
})
export class MaterialModule { }
