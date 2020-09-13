import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeesListComponent } from "./employees-list/employees-list.component";

const employeesRoutesConfig: Routes = [
    {path: '',component: EmployeesListComponent},
]

export const employeesRoutes: ModuleWithProviders = RouterModule.forChild(employeesRoutesConfig);