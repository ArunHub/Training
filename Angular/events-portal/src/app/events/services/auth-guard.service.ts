import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Token } from "../../security/models/token";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private _router: Router) {

    }
    token: Token;
    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean {
        this.token = <Token>JSON.parse(<string>sessionStorage.getItem("token"));
        if (this.token) {
            return true;
        }
        else {
            this._router.navigate(['/login'], {
                queryParams: {
                    returnUrl: state.url
                }
            });
            return false;
        }
    }
}