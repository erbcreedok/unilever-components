import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './tasks.component';
import {MyTasksComponent} from './my-tasks/my-tasks.component';
import {OtherTasksComponent} from './other-tasks/other-tasks.component';
import {TasksComponent as TaskContainerComponent} from '../../containers/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TasksComponent, children: [
    {path: '', pathMatch: 'prefix', redirectTo: 'my/in-process'},
    {path: 'my', pathMatch: 'prefix', component: MyTasksComponent, children: [
      {path: '', pathMatch: 'prefix', redirectTo: 'in-process'},
      {path: ':status', pathMatch: 'prefix', component: TaskContainerComponent},
    ]},
    {path: 'other', pathMatch: 'prefix', component: OtherTasksComponent, children: [
      {path: '', pathMatch: 'prefix', redirectTo: 'promoactivities'},
      {path: ':status', pathMatch: 'prefix', component: TaskContainerComponent},
    ]},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
