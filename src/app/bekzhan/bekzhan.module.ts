import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BekzhanComponent } from './bekzhan.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { ProfileNotificationsComponent } from './profile-notifications/profile-notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { ElModule } from 'element-angular';
import 'element-angular/theme/index.css';

@NgModule({
  imports: [
    CommonModule,
    ElModule.forRoot()
  ],
  declarations: [BekzhanComponent, TabsComponent, TabComponent, ProfileNotificationsComponent, NotificationComponent, NewTaskComponent],
  exports: [BekzhanComponent]
})
export class BekzhanModule { }
