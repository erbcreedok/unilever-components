import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ElModule} from 'element-angular/release/element-angular.module';
import {UnileverUiModule} from '../../shared/unilever-ui/unilever-ui.module';
import {MaterialModule} from '../../shared/material/material.module';
import {ComponentsModule} from '../../components/components.module';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeTasksComponent } from './employee-tasks/employee-tasks.component';
import { EmployeePromoactivitiesComponent } from './employee-promoactivities/employee-promoactivities.component';
import { EmployeeCheckPartsComponent } from './employee-check-parts/employee-check-parts.component';

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot(),
    UnileverUiModule,
    MaterialModule,
    ComponentsModule,
    EmployeeRoutingModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeTasksComponent,
    EmployeePromoactivitiesComponent,
    EmployeeCheckPartsComponent
  ]
})
export class EmployeeModule { }
