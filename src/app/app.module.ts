import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular/release/element-angular.module';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    TasksComponent,
    HeaderComponent,
    AsideComponent,
    PageNotFoundComponent,
    EmployeeViewComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
        appRoutes, { enableTracing: true }
    ),
    BrowserAnimationsModule,
    ElModule.forRoot(),
    UnileverUiModule,
    BekzhanModule,
    YerbolModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
