import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './tasks.component';
import {MyTasksComponent} from './my-tasks/my-tasks.component';
import {OtherTasksComponent} from './other-tasks/other-tasks.component';
import {TasksComponent as TaskContainerComponent} from '../../containers/tasks/tasks.component';
import {MyTasksTableComponent} from './my-tasks/my-tasks-table/my-tasks-table.component';
import {TaskComponent} from './task/task.component';
import {STATUSES, TYPES} from './task-types.constants';

const routes: Routes = [
  {path: 'id/:type/:id', component: TaskComponent},
  { path: '', component: TasksComponent, children: [
    {path: 'my', component: MyTasksComponent, children: [
      {path: ':status/:type', component: MyTasksTableComponent},
      {path: ':status', redirectTo: ':status/' + TYPES[0].path},
      {path: '', redirectTo: STATUSES[0].path + '/' + TYPES[0].path},
    ]},
    {path: 'other', component: OtherTasksComponent, children: [
      {path: ':type', component: TaskContainerComponent},
      {path: '', redirectTo: TYPES[0].path},
    ]},
    {path: '', redirectTo: 'my/' + STATUSES[0].path},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
