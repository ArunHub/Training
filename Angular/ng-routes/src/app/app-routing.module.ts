import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthComponent } from './month/month.component';
import { DayComponent } from './day/day.component';
import { ComposeMessageComponent } from './compose.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { YearComponent } from './year/year.component';


export const routes: Routes = [
  { path: 'month', component: MonthComponent },
  { path: 'day', component: DayComponent, data: { title: 'Today is Friday' } },
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  { path: 'year', loadChildren: 'app/year/year-route.module#YearRouteModule'},
  // {
  //   path: 'year', component: YearComponent, children: [
  //     {
  //       path: '', children: [
  //         { path: 'apocalyse', component: ApocalyseComponent },
  //         { path: ':id', component: YearIdComponent },
  //       ]
  //     },

  //   ]
  // },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    //   enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
