import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {LoginViewComponent} from './login-view/login-view.component';
import {UnileverUiModule} from '../shared/unilever-ui/unilever-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import { LogoutViewComponent } from './logout-view/logout-view.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UnileverUiModule,
    RouterModule,
  ],
  declarations: [
    PageNotFoundComponent,
    LoginViewComponent,
    LogoutViewComponent
  ],
})
export class ViewsModule { }
