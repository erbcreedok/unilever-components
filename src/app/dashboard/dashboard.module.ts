import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ContainersModule } from '../containers/containers.module';
import {ViewsModule} from '../views/views.module';
import {ProfileService} from '../providers/profile.service';
import {AuthInterceptor} from '../providers/auth/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TasksService} from '../providers/tasks.service';
import {TaskService} from '../providers/task.service';

@NgModule({
  imports: [
    CommonModule,
    ContainersModule,
    DashboardRoutingModule,
    ViewsModule
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    ProfileService,
    TasksService,
    TaskService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
