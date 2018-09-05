import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import 'element-angular/theme/index.css';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { AuthService } from './providers/auth.service';

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
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
