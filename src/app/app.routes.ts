import { Routes } from '@angular/router';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import {EmployeeViewComponent} from "./views/employee-view/employee-view.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeViewComponent },
    { path: 'employee/:id', component: EmployeeViewComponent },
    { path: 'no-route', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'no-route'},
];
