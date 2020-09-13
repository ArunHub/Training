import { NgModule } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeRoutingModule } from './employee.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogService } from './services/dialog.service';
import { CanDeActivateGuardService } from './services/candeactivate.guard';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule ,HttpClientModule, EmployeeRoutingModule, 
        SharedModule, AgGridModule.withComponents([]),],
    exports: [],
    declarations: [EmployeeListComponent, NewEmployeeComponent]
})
export class EmployeeModule { }
