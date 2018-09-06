import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';
import { throwError } from 'rxjs/index';
import { BASE_URL } from '../../shared/CONSTANTS';
import * as moment from 'moment';

@Injectable()
export class AuthService {

  public credentials: {email: string, password: string};
  public token: string;
  public token_expires: Date;
  public requestStatus = 'idle';
  private httpOptions: any;
  public username: string;
  public errors: any = [];

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

  public login(credentials) {
    this.requestStatus = 'loading';
    this.credentials = credentials;
    return this.http.post
    (
        BASE_URL + '/api/token-auth/',
        credentials,
        this.httpOptions
    ).pipe(
      tap(
        data => {
          console.log(data);
          this.setSession(data);
          return data;
        },
        err => this.errorHandler
      )
    );
  }

  private setSession(authRes) {
    console.log('setSession', authRes);
    this.requestStatus = 'success';
    this.updateData(authRes.token);
    localStorage.setItem('token', this.token);
    localStorage.setItem('expires_at', JSON.stringify(this.token_expires));
    localStorage.setItem('credentials', JSON.stringify(this.credentials));
  }

  public getSession() {
    this.token = localStorage.getItem('token');
    this.token_expires = JSON.parse(localStorage.getItem('expires_at'));
    this.credentials = JSON.parse(localStorage.getItem('credentials'));
    this.refreshToken();
  }

  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    return this.http.post
    (
        BASE_URL + '/api/token-verify/',
        {token: this.token},
        this.httpOptions
    ).pipe(
        tap(
            data => this.setSession,
            err => this.errorHandler
        )
    );
  }

  public logout() {
    this.token = null;
    this.token_expires = null;
    this.username = null;
    this.credentials = null;
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('credentials');
  }

  private updateData(token) {
    this.token = token;
    this.errors = [];

    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;

    console.log(this.token, this.token_expires, this.username);
  }

  private errorHandler(err) {
    this.requestStatus = 'error';
    this.errors = err['error'];
    if (err.status === 400) {
      this.logout();
      return throwError(
          'Bad Credentials'
      );
    }
    return err;
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  shouldIGetToken(threshold_seconds: number = 120): boolean {
    const expDate = this.token_expires.valueOf() - (threshold_seconds * 1000);

    return new Date().valueOf() > expDate;
  }
}
