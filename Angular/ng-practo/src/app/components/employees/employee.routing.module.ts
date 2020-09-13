import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { CanDeActivateGuardService } from './services/candeactivate.guard';
import { EmployeeResolverService } from './services/employee-resolver.service';
import { AuthGuardService } from '../../shared/services';

const employeeRoutes: Routes = [
    {
        path: '', component: EmployeeListComponent,
        resolve: {
            resEmployee: EmployeeResolverService
        },
        canActivateChild: [AuthGuardService],
        children:[
            {
                path: 'new', component: NewEmployeeComponent, canDeactivate: [CanDeActivateGuardService]
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(employeeRoutes)],
    exports: [RouterModule]
})



export class EmployeeRoutingModule {}