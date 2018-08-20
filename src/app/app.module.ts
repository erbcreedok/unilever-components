import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ElModule } from 'element-angular/release/element-angular.module';
import { ChartjsModule } from '@ctrl/ngx-chartjs';
import 'element-angular/theme/index.css';
import { BekzhanModule } from './bekzhan/bekzhan.module';
import { YerbolModule } from './yerbol/yerbol.module';
import { AppComponent } from './app.component';
import { UnileverUiModule } from './unilever-ui/unilever-ui.module';
import { ComponentsModule } from './components/components.module';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { TasksComponent } from './containers/tasks/tasks.component';
import { HeaderComponent } from './containers/header/header.component';
import { AsideComponent } from './containers/aside/aside.component';
import { appRoutes } from './app.routes';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { EmployeeViewComponent } from './views/employee-view/employee-view.component';
import { EmployeeTasksViewComponent } from './containers/employee-tasks-view/employee-tasks-view.component';
import { EmployeePromoactivitiesViewComponent } from './containers/employee-promoactivities-view/employee-promoactivities-view.component';
import { EmployeeCheckPartsViewComponent } from './containers/employee-check-parts-view/employee-check-parts-view.component';
import { NotificationsPanelComponent } from './containers/notifications-panel/notifications-panel.component';
import {ClickOutsideModule} from 'ng-click-outside';
import { NewTaskFormComponent } from './containers/new-task-form/new-task-form.component';
import { AccountSettingsFormComponent } from './containers/account-settings-form/account-settings-form.component';
import { TasksViewComponent } from './views/tasks-view/tasks-view.component';
import { MyTasksViewComponent } from './views/my-tasks-view/my-tasks-view.component';
import { OtherTasksViewComponent } from './views/other-tasks-view/other-tasks-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    TasksComponent,
    HeaderComponent,
    AsideComponent,
    PageNotFoundComponent,
    EmployeeViewComponent,
    EmployeeTasksViewComponent,
    EmployeePromoactivitiesViewComponent,
    EmployeeCheckPartsViewComponent,
    NotificationsPanelComponent,
    NewTaskFormComponent,
    AccountSettingsFormComponent,
    TasksViewComponent,
    MyTasksViewComponent,
    OtherTasksViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes, { enableTracing: true }
    ),
    MaterialModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    ClickOutsideModule,
    UnileverUiModule,
    BekzhanModule,
    YerbolModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
