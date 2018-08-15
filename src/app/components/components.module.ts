import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular/release/element-angular.module';
import 'element-angular/theme/index.css';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TaskTableComponent } from './task-table/task-table.component';
import { UnileverUiModule } from '../unilever-ui/unilever-ui.module';

@NgModule({
  imports: [
    NgxDatatableModule,
    CommonModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    UnileverUiModule
  ],
  declarations: [TaskTableComponent],
  exports: [TaskTableComponent],
})
export class ComponentsModule {}
