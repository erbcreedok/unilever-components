import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { BekzhanComponent } from './bekzhan.component';
import { BekzhanRoutingModule } from './bekzhan-routing.module';
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
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { GalleryMoreInfoComponent } from './gallery-more-info/gallery-more-info.component';
import { AuthorizationComponent } from './authorization/authorization.component';

import { NgxGalleryModule } from 'ngx-gallery';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ElModule.forRoot(),
    BekzhanRoutingModule,
    NgxGalleryModule,
  ],
  declarations: [
    BekzhanComponent,
    TabsComponent,
    TabComponent,
    ProfileNotificationsComponent,
    NotificationComponent,
    NewTaskComponent,
    TaskFilterComponent,
    ProverkaDoleiFilterComponent,
    AccountSettingsComponent,
    GalleryFiilterComponent,
    TasksInnerComponent,
    GalleryComponent,
    GalleryItemComponent,
    GalleryMoreInfoComponent,
    AuthorizationComponent,
  ],
  exports: [BekzhanComponent]
})
export class BekzhanModule { }
