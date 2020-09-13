import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YearComponent } from './year.component';
import { YearIdComponent } from './year-id/year-id.component';
import { ApocalyseComponent } from './apocalyse/apocalyse.component';

const yearRoutes: Routes = [
   {
      path: 'year', component: YearComponent, children: [
        { path: '', children: [
          { path: 'apocalyse', component: ApocalyseComponent },
          { path: ':id', component: YearIdComponent },
        ] },
        
      ]
      // path:'', redirectTo:'/', pathMatch:'full'
   },
];

@NgModule({
   imports: [RouterModule.forChild(yearRoutes)],
   exports: [RouterModule]
})
export class YearRouteRoutingModule { }
