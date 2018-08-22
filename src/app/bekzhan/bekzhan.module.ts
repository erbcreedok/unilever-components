import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { BekzhanComponent } from './bekzhan.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { ProfileNotificationsComponent } from './profile-notifications/profile-notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { ElModule } from 'element-angular';
import 'element-angular/theme/index.css';
import { TaskFilterComponent } from './task-filter/task-filter.component';
import { ProverkaDoleiFilterComponent } from './proverka-dolei-filter/proverka-dolei-filter.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { GalleryFiilterComponent } from './gallery-fiilter/gallery-fiilter.component';
import { TasksInnerComponent } from './tasks-inner/tasks-inner.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ElModule.forRoot()
  ],
  declarations: [BekzhanComponent, TabsComponent, TabComponent, ProfileNotificationsComponent, NotificationComponent, NewTaskComponent, TaskFilterComponent, ProverkaDoleiFilterComponent, AccountSettingsComponent, GalleryFiilterComponent, TasksInnerComponent],
  exports: [BekzhanComponent]
})
export class BekzhanModule { }
