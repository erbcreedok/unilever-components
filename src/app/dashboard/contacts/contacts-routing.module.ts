import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts.component';
import {TasksComponent} from '../../containers/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: ContactsComponent, children: [
    {path: ':type', pathMatch: 'prefix', component: TasksComponent},
    {path: '', pathMatch: 'prefix', redirectTo: 'company'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
