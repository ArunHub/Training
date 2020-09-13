import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from "@angular/router";
import { SepLoginComponent } from './security/sep-login/sep-login.component';

const defaultRoute: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    }
]

const HomeRoute: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    }
]

const eventsRoute: Routes = [
    {
        path: 'events',
        loadChildren: './events/events.module#EventsModule'
    }
]
const employeesRoute: Routes = [
    {
        path: 'employees',
        loadChildren: './employees/employee.module#EmployeeModule'
    }
]
const jphRoute: Routes = [
    {
        path: 'jph',
        loadChildren: './jph/jph.module#JphModule'
    }
]

const usersRoute: Routes = [
    {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
    }
]

const securityRoute: Routes = [
    {
        path: 'login', component: SepLoginComponent
    }
]

const appRouteConfig: Routes = [
  ...HomeRoute,
  ...employeesRoute,
  ...eventsRoute,
  ...jphRoute,
  ...usersRoute,
  ...securityRoute,
  ...defaultRoute
]

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(appRouteConfig);