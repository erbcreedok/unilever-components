import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AsideComponent} from './aside/aside.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {NotificationsPanelComponent} from './notifications-panel/notifications-panel.component';
import {ElModule} from 'element-angular/release/element-angular.module';
import {NewTaskFormComponent} from '../forms/new-task-form/new-task-form.component';
import {ComponentsModule} from '../components/components.module';
import {UnileverUiModule} from '../shared/unilever-ui/unilever-ui.module';
import {ClickOutsideModule} from 'ng-click-outside';
import {TasksComponent} from './tasks/tasks.component';
import {EmployeeCheckPartsViewComponent} from './employee-check-parts-view/employee-check-parts-view.component';
import {EmployeePromoactivitiesViewComponent} from './employee-promoactivities-view/employee-promoactivities-view.component';
import {EmployeeTasksViewComponent} from './employee-tasks-view/employee-tasks-view.component';
import { AbsFilterComponent } from './abs-filter/abs-filter.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    UnileverUiModule,
    ClickOutsideModule,
    ElModule.forRoot(),
    RouterModule.forChild([])
  ],
  declarations: [
      AsideComponent,
      HeaderComponent,
      NotificationsPanelComponent,
      NewTaskFormComponent,
      TasksComponent,
      EmployeeCheckPartsViewComponent,
      EmployeePromoactivitiesViewComponent,
      EmployeeTasksViewComponent,
      AbsFilterComponent,
  ],
  exports: [
      AsideComponent,
      HeaderComponent,
      NotificationsPanelComponent,
      NewTaskFormComponent,
      TasksComponent,
      EmployeeCheckPartsViewComponent,
      EmployeePromoactivitiesViewComponent,
      EmployeeTasksViewComponent,
  ]
})
export class ContainersModule { }
