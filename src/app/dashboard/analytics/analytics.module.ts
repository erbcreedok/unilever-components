import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import {MaterialModule} from '../../shared/material/material.module';
import {ContainersModule} from '../../containers/containers.module';
import {UnileverUiModule} from '../../shared/unilever-ui/unilever-ui.module';

@NgModule({
  imports: [
    CommonModule,
    UnileverUiModule,
    ContainersModule,
    MaterialModule,
    AnalyticsRoutingModule
  ],
  declarations: [AnalyticsComponent]
})
export class AnalyticsModule { }
