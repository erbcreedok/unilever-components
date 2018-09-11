import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElModule } from 'element-angular/release/element-angular.module';
import 'element-angular/theme/index.css';
import { MaterialModule } from '../material/material.module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
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
import { UiButtonTabComponent } from './ui-button-tabs/ui-button-tab.component';
import { RouterModule } from '@angular/router';
import { UiGalleryItemComponent } from './ui-gallery-item/ui-gallery-item.component';
import { UiDatepickerComponent } from './ui-datepicker/ui-datepicker.component';
import { UiDataTableComponent } from './ui-data-table/ui-data-table.component';
import { UiTwoWayTableComponent } from './ui-two-way-table/ui-two-way-table.component';

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot(),
    RouterModule,
    NgbDropdownModule,
    MaterialModule,
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
    UiButtonTabComponent,
    UiGalleryItemComponent,
    UiDatepickerComponent,
    UiDataTableComponent,
    UiTwoWayTableComponent,
  ],
  exports: [
    ElModule,
    ProfileWindowComponent,
    ProfileStatusComponent,
    UiButtonComponent,
    UiIconCircleComponent,
    UiDropdownComponent,
    UiTaskStatusComponent,
    HelperComponent,
    ProfileBoxComponent,
    UiChartLegendsComponent,
    UiButtonTabsComponent,
    UiButtonTabComponent,
    UiGalleryItemComponent,
    UiDatepickerComponent,
    UiDataTableComponent,
    MaterialModule,
  ]
})
export class UnileverUiModule { }
