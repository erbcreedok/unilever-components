import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {LoginViewComponent} from './login-view/login-view.component';
import {UnileverUiModule} from '../shared/unilever-ui/unilever-ui.module';

@NgModule({
  imports: [
    CommonModule,
    UnileverUiModule,
    RouterModule,
  ],
  declarations: [
    PageNotFoundComponent,
    LoginViewComponent
  ],
})
export class ViewsModule { }
