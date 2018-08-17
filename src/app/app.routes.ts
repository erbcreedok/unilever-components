import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { EmployeeViewComponent } from './views/employee-view/employee-view.component';
import { EmployeeTasksViewComponent } from './containers/employee-tasks-view/employee-tasks-view.component';
import { EmployeePromoactivitiesViewComponent } from './containers/employee-promoactivities-view/employee-promoactivities-view.component';
import { EmployeeCheckPartsViewComponent } from './containers/employee-check-parts-view/employee-check-parts-view.component';
import { BekzhanComponent } from './bekzhan/bekzhan.component';
import { YerbolComponent } from './yerbol/yerbol.component';
import {TasksViewComponent} from './views/tasks-view/tasks-view.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeViewComponent },
    { path: 'employee/:id', component: EmployeeViewComponent, children: [
        {path: '', pathMatch: 'prefix', redirectTo: 'promoactivities'},
        {path: 'tasks', component: EmployeeTasksViewComponent},
        {path: 'promoactivities', component: EmployeePromoactivitiesViewComponent},
        {path: 'check-parts', component: EmployeeCheckPartsViewComponent}
    ]},
    { path: 'tasks', component: TasksViewComponent },
    { path: 'bekzhan', component: BekzhanComponent },
    { path: 'yerbol', component: YerbolComponent },
    { path: 'no-route', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'no-route'},
];
