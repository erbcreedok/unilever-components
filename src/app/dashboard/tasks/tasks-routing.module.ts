import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './tasks.component';
import {MyTasksComponent} from './my-tasks/my-tasks.component';
import {OtherTasksComponent} from './other-tasks/other-tasks.component';
import {TasksComponent as TaskContainerComponent} from '../../containers/tasks/tasks.component';
import {MyTasksTableComponent} from './my-tasks/my-tasks-table/my-tasks-table.component';
import {TaskComponent} from './task/task.component';

const routes: Routes = [
  {path: 'id/:id', pathMatch: 'prefix', component: TaskComponent},
  { path: '', component: TasksComponent, children: [
    {path: 'my', pathMatch: 'prefix', component: MyTasksComponent, children: [
      {path: '', pathMatch: 'prefix', redirectTo: 'in-process'},
      {path: ':status', pathMatch: 'prefix', component: MyTasksTableComponent},
    ]},
    {path: 'other', pathMatch: 'prefix', component: OtherTasksComponent, children: [
      {path: '', pathMatch: 'prefix', redirectTo: 'promoactivities'},
      {path: ':status', pathMatch: 'prefix', component: TaskContainerComponent},
    ]},
    {path: '', pathMatch: 'prefix', redirectTo: 'my/in-process'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
