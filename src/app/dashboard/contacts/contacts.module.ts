import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContainersModule} from '../../containers/containers.module';
import {UnileverUiModule} from '../../shared/unilever-ui/unilever-ui.module';
import {MaterialModule} from '../../shared/material/material.module';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';

@NgModule({
  imports: [
    CommonModule,
    UnileverUiModule,
    ContainersModule,
    ContactsRoutingModule
  ],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
