import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { YearComponent } from "../year/year.component";
import { DayComponent } from "../day/day.component";
import { AdminDashboardComponent } from "./admin-dashboard.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "../auth-guard.service";

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'year', component: YearComponent },
          { path: 'day', component: DayComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }