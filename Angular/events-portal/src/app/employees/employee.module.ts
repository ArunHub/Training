import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { employeesRoutes } from './employees.routes';

@NgModule({
    imports: [CommonModule, employeesRoutes],
    exports: [],
    declarations: [
        EmployeeDetailsComponent,
        EmployeesListComponent
    ],
    providers: [],
})
export class EmployeeModule { }
