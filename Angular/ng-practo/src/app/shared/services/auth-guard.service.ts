import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { Token } from '../../components/login/models/token';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate, CanActivateChild {

    constructor(
        private _authService: AuthService,
        private _messageService: MessageService,
        private _router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let token = <Token>JSON.parse(<string>sessionStorage.getItem('token'));
        if (token) {
            this._messageService.broadcastMsg(`Login successful`);
            return true;
        }
        else{
            this._router.navigate(['/login'], {
                queryParams: {
                    returntourl: state.url
                }
            });
            this._messageService.broadcastMsg(`${route.routeConfig.path} is not successful`);
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this._authService.isManagerLogged) {
            return true;
        }
        this._messageService.broadcastMsg(`Outside visitors are strictly prohibited`);
        return false;
    }
}
