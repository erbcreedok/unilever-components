import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UnileverUiModule} from '../../shared/unilever-ui/unilever-ui.module';
import {MaterialModule} from '../../shared/material/material.module';
import {ComponentsModule} from '../../components/components.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileSettingsModalComponent } from './profile-settings/profile-settings-modal.component';
import { ProfileSettingsFormComponent } from './profile-settings/profile-settings-form.component';
import {ElModule} from 'element-angular/release/element-angular.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UnileverUiModule,
    MaterialModule,
    ComponentsModule,
    ProfileRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent,
    ProfileSettingsFormComponent,
    ProfileSettingsModalComponent,
  ],
  entryComponents: [ProfileSettingsFormComponent],
})
export class ProfileModule { }
