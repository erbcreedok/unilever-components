import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { tap } from 'rxjs/operators/tap';
import {AuthService} from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private bearer = 'JWT';

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem('token');

        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization',
                    this.bearer + ' ' + idToken)
            });

            return next.handle(cloned)
                .pipe(tap(
                    err => {
                        if (err instanceof HttpErrorResponse) {
                            if (err.status === 401 || err.status === 403) {
                                this.authService.logout();
                            }
                        }
                    }
                ));
        } else {
            return next.handle(req);
        }
    }
}