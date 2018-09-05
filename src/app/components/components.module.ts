import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular/release/element-angular.module';
import 'element-angular/theme/index.css';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TaskTableComponent } from './task-table/task-table.component';
import { UnileverUiModule } from '../shared/unilever-ui/unilever-ui.module';
import { PromoactivitiesBarChartComponent } from './promoactivities-bar-chart/promoactivities-bar-chart.component';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import { PromoactivitiesDonutChartComponent } from './promoactivities-donut-chart/promoactivities-donut-chart.component';
import { MaterialModule } from '../shared/material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material';
import { CheckPartsTableComponent } from './check-parts-table/check-parts-table.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  imports: [
    NgxDatatableModule,
    CommonModule,
    ElModule.forRoot(),
    ChartjsModule,
    UnileverUiModule,
    MaterialModule
  ],
  declarations: [
    TaskTableComponent,
    PromoactivitiesBarChartComponent,
    PromoactivitiesDonutChartComponent,
    CheckPartsTableComponent,
    NotificationComponent,
  ],
  exports: [
    TaskTableComponent,
    PromoactivitiesBarChartComponent,
    PromoactivitiesDonutChartComponent,
    CheckPartsTableComponent,
    NotificationComponent,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
  ]
})
export class ComponentsModule {}
