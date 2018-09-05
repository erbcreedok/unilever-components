import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnalyticsComponent} from './analytics.component';
import {EmployeePromoactivitiesViewComponent} from '../../containers/employee-promoactivities-view/employee-promoactivities-view.component';
import {EmployeeCheckPartsViewComponent} from '../../containers/employee-check-parts-view/employee-check-parts-view.component';
import {EmployeeTasksViewComponent} from '../../containers/employee-tasks-view/employee-tasks-view.component';

const routes: Routes = [
  { path: '', component: AnalyticsComponent, children: [
    {path: 'promoactivities', component: EmployeePromoactivitiesViewComponent},
    {path: 'check-parts', component: EmployeeCheckPartsViewComponent},
    {path: 'additional', component: EmployeeTasksViewComponent},
    {path: '', pathMatch: 'prefix', redirectTo: 'promoactivities'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
