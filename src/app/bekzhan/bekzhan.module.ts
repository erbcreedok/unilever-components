import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BekzhanComponent } from './bekzhan.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BekzhanComponent, TabsComponent, TabComponent],
  exports: [BekzhanComponent]
})
export class BekzhanModule { }
