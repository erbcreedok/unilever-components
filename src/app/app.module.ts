import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular/release/element-angular.module';
import 'element-angular/theme/index.css';
import { BekzhanModule } from './bekzhan/bekzhan.module';
import { YerbolModule } from './yerbol/yerbol.module';
import { AppComponent } from './app.component';
import { UnileverUiModule } from './unilever-ui/unilever-ui.module';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
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
