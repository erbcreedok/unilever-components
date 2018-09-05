import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee.component';
import {EmployeeTasksComponent} from './employee-tasks/employee-tasks.component';
import {EmployeePromoactivitiesComponent} from './employee-promoactivities/employee-promoactivities.component';
import {EmployeeCheckPartsComponent} from './employee-check-parts/employee-check-parts.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent, children: [
    {path: '', pathMatch: 'prefix', redirectTo: 'promoactivities'},
    {path: 'tasks', component: EmployeeTasksComponent},
    {path: 'promoactivities', component: EmployeePromoactivitiesComponent},
    {path: 'check-parts', component: EmployeeCheckPartsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
