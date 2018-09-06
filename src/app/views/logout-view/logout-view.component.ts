import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../providers/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout-view',
  template: '',
})
export class LogoutViewComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
