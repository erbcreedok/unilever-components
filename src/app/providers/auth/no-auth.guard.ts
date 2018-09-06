
import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

import 'rxjs/add/operator/mapTo';

@Injectable()
export class NoAuthGuard implements CanActivate, CanActivateChild {

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
        if (this._authService.isLoggedOut()) {
            return true;
        }
        this._router.navigate(['/dashboard']);
        return false;
    }
}
