import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
import { EmployeeService } from './employee.service';
import { takeLast, take, mergeMap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class EmployeeResolverService implements Resolve<Employee[]>{

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Employee[] | Observable<Employee[]> | Promise<Employee[]> {
        return this._employeeService.getEmployeeList().pipe(
            take(2),
            mergeMap( (emp) => {
                if(emp){
                    console.log('ooooooooooooo', emp);
                    return of(emp)
                }else{
                    this._router.navigate(['/home']);
                }
            })
        )
    }
    constructor(private _employeeService: EmployeeService, private _router: Router) {
    }
}