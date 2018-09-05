import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile.component';
import {ProfileSettingsModalComponent} from './profile-settings/profile-settings-modal.component';

const routes: Routes = [
  { path: '', component: ProfileComponent, children: [
    {path: 'edit', component: ProfileSettingsModalComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
