import {Component, OnInit} from '@angular/core';
import {AuthService} from './providers/auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from './shared/CONSTANTS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'unilever';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.getSession();
    } else {
      this.authService.logout();
    }
  }
}
