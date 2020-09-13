import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";

const usersRoutesConfig: Routes = [
    {path: '', component: UsersListComponent}
];

export const usersRoutes: ModuleWithProviders = RouterModule.forChild(usersRoutesConfig);