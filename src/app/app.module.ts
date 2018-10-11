import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import 'element-angular/theme/index.css';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { AuthService } from './providers/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './providers/auth/auth.interceptor';
import {AuthGuard} from './providers/auth/auth.guard';
import {NoAuthGuard} from './providers/auth/no-auth.guard';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ViewsModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    NoAuthGuard,
    { provide: LOCALE_ID, useValue: 'ru' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
