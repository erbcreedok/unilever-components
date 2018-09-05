import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ContainersModule } from '../containers/containers.module';
import {ViewsModule} from '../views/views.module';

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
  exports: [DashboardComponent]
})
export class DashboardModule { }
