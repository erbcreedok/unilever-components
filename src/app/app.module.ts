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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes, { enableTracing: true }
    ),
    MaterialModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    UnileverUiModule,
    BekzhanModule,
    YerbolModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
