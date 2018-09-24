import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile.component';
import {ProfileSettingsModalComponent} from './profile-settings/profile-settings-modal.component';
import {ProfileAvatarUploadModalComponent} from './profile-avatar-upload/profile-avatar-upload-modal.component';

const routes: Routes = [
  { path: '', component: ProfileComponent, children: [
    {path: 'edit', component: ProfileSettingsModalComponent},
    {path: 'avatar-upload', component: ProfileAvatarUploadModalComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
