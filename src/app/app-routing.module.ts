import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './providers/auth/auth.guard';
import { NoAuthGuard } from './providers/auth/no-auth.guard';

import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { LogoutViewComponent } from './views/logout-view/logout-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginViewComponent, canActivate: [NoAuthGuard] },
  { path: 'logout', component: LogoutViewComponent, canActivate: [AuthGuard] },
  { path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
