import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './shared/services';

const appRoutes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService],
    loadChildren: './components/employees/employee.module#EmployeeModule'
  },
  { path: 'login', loadChildren: './components/login/login.module#LoginModule' },
  { path: '', component: HomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }