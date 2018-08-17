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
import { UiTaskStatusComponent } from './task-status/task-status.component';
import { HelperComponent } from './helper/helper.component';
import { ProfileBoxComponent } from './profile-box/profile-box.component';
import { UiChartLegendsComponent } from './ui-chart-legends/ui-chart-legends.component';
import { UiButtonTabsComponent } from './ui-button-tabs/ui-button-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
  ],
  declarations: [
    ProfileStatusComponent,
    UiButtonComponent,
    UiIconCircleComponent,
    ProfileWindowComponent,
    UiDropdownComponent,
    UiTaskStatusComponent,
    HelperComponent,
    ProfileBoxComponent,
    UiChartLegendsComponent,
    UiButtonTabsComponent,
  ],
  exports: [
    ProfileWindowComponent,
    ProfileStatusComponent,
    UiButtonComponent,
    UiIconCircleComponent,
    UiDropdownComponent,
    UiTaskStatusComponent,
    HelperComponent,
    ProfileBoxComponent,
    UiChartLegendsComponent
  ]
})
export class UnileverUiModule { }
