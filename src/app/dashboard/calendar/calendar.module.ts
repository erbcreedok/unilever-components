import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule as CalendarPackageModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar.component';
import { MwlCalendarComponent } from './mwl-calendar/mwl-calendar.component'
import { CalendarRoutingModule } from './calendar-routing.module';
import { MomentModule } from 'angular2-moment';
import {UnileverUiModule} from '../../shared/unilever-ui/unilever-ui.module';
import { CalendarTasksComponent } from './calendar-tasks/calendar-tasks.component';

@NgModule({
  imports: [
    MomentModule,
    CommonModule,
    FormsModule,
    UnileverUiModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarRoutingModule,
    CalendarPackageModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [
    CalendarComponent,
    MwlCalendarComponent,
    CalendarTasksComponent
  ],
  exports: [CalendarComponent]
})
export class CalendarModule {}
