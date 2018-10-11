import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {PageNotFoundComponent} from '../views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'home', loadChildren: './profile/profile.module#ProfileModule' },
    { path: 'employee/:id', loadChildren: './employee/employee.module#EmployeeModule' },
    { path: 'tasks', loadChildren: './tasks/tasks.module#TasksModule' },
    { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
    { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule' },
    { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsModule' },
    { path: 'gallery', loadChildren: './gallery/gallery.module#GalleryModule' },
    { path: 'bekzhan', loadChildren: '../bekzhan/bekzhan.module#BekzhanModule' },
    { path: 'yerbol', loadChildren: '../yerbol/yerbol.module#YerbolModule' },
    { path: 'no-route', component: PageNotFoundComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'no-route' },
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
