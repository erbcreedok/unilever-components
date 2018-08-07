import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TaskTableComponent } from './task-table/task-table.component';

@NgModule({
  imports: [
    NgxDatatableModule,
    CommonModule
  ],
  declarations: [TaskTableComponent],
  exports: [TaskTableComponent],
})
export class ComponentsModule { }
