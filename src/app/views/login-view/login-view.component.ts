import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../providers/auth/auth.service';
import {ElNotificationService} from 'element-angular/release/notification/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('alexandr.min@unilever.com'),
    password: new FormControl('12345')
  });

  constructor(private authService: AuthService,
              private notify: ElNotificationService,
              private router: Router) { }

  ngOnInit() {}

  onFormSubmit(event) {
    event.preventDefault();
    this.authService.login(this.loginForm.value).subscribe(
        data => {
          this.authService.requestStatus = 'success';
          this.router.navigate(['/dashboard']);
        },
        err => {
          console.log('error', err);
          this.authService.requestStatus = 'error';
          this.notify['error']('Введены неверные данные', 'Ошибка при входе');
        }
    );
  }

  isLoading(): boolean {
    return this.authService.requestStatus === 'loading';
  }
}
