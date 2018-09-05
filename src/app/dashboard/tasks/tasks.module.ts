import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComponentsModule} from '../../components/components.module';
import {MaterialModule} from '../../shared/material/material.module';
import {UnileverUiModule} from '../../shared/unilever-ui/unilever-ui.module';
import {ContainersModule} from '../../containers/containers.module';
import {ElModule} from 'element-angular/release/element-angular.module';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { OtherTasksComponent } from './other-tasks/other-tasks.component';

@NgModule({
  imports: [
    CommonModule,
    UnileverUiModule,
    MaterialModule,
    ComponentsModule,
    ContainersModule,
    ElModule.forRoot(),
    TasksRoutingModule
  ],
  declarations: [TasksComponent, MyTasksComponent, OtherTasksComponent]
})
export class TasksModule { }
