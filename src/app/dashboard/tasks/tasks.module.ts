import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComponentsModule} from '../../components/components.module';
import {UnileverUiModule} from '../../shared/unilever-ui/unilever-ui.module';
import {ContainersModule} from '../../containers/containers.module';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { OtherTasksComponent } from './other-tasks/other-tasks.component';
import { MyTasksTableComponent } from './my-tasks/my-tasks-table/my-tasks-table.component';
import { TaskComponent } from './task/task.component';
import { TasksFilterComponent } from './tasks-filter/tasks-filter.component';

@NgModule({
  imports: [
    CommonModule,
    UnileverUiModule,
    ComponentsModule,
    ContainersModule,
    TasksRoutingModule
  ],
  declarations: [TasksComponent, MyTasksComponent, OtherTasksComponent, MyTasksTableComponent, TaskComponent, TasksFilterComponent]
})
export class TasksModule { }
