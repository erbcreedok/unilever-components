import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileStatusComponent } from './profile-status/profile-status.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileStatusComponent],
  exports: [
      ProfileStatusComponent
  ]
})
export class UnileverUiModule { }
