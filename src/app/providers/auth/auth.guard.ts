
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

import 'rxjs/add/operator/mapTo';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private _authService: AuthService,
                private _router: Router) {
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
        return this.performCheck(childRoute, state);
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.performCheck(next, state);
    }

    private performCheck(next: ActivatedRouteSnapshot,
                         state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this._authService.isLoggedIn()) {
            if (this._authService.shouldIGetToken()) {
                this._authService.refreshToken();
            }
            return true;
        }
        this._authService.logout();
        this._router.navigate(['/login']);
        return false;
    }
}
