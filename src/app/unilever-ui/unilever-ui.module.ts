import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular/release/element-angular.module';
import 'element-angular/theme/index.css';
import { ProfileStatusComponent } from './profile-status/profile-status.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiIconCircleComponent } from './ui-icon-circle/ui-icon-circle.component';
import { ProfileWindowComponent } from './profile-window/profile-window.component';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
  ],
  declarations: [ProfileStatusComponent, UiButtonComponent, UiIconCircleComponent, ProfileWindowComponent, UiDropdownComponent],
  exports: [
    ProfileWindowComponent,
    ProfileStatusComponent,
    UiButtonComponent,
    UiIconCircleComponent,
    UiDropdownComponent
  ]
})
export class UnileverUiModule { }
