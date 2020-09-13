import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NewEmployeeComponent } from '../new-employee/new-employee.component';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
   }

@Injectable({providedIn: 'root'})
export class CanDeActivateGuardService implements CanDeactivate<CanComponentDeactivate>{

    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // return component._dialogService.confirm('Discard changes?');
        return component.canDeactivate? component.canDeactivate() : true;
    }
    constructor() { }
}