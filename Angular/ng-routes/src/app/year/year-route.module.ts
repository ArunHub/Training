import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YearRouteRoutingModule } from './year-route-routing.module';
import { YearComponent } from './year.component';
import { YearIdComponent } from './year-id/year-id.component';
import { ApocalyseComponent } from './apocalyse/apocalyse.component';
import { YearService } from './year.service';

@NgModule({
  imports: [
    CommonModule,
    YearRouteRoutingModule
  ],
  declarations: [
     YearComponent,
     YearIdComponent,
     ApocalyseComponent
  ],
  providers: [YearService]
})
export class YearRouteModule { }
