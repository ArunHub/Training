import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmployeeService {
    constructor(private _httpClient: HttpClient) { }
    
    getEmployeeList(): Observable<Employee[]>{
        return this._httpClient.get<Employee[]>('http://localhost:8888/getemployees');
    }
}