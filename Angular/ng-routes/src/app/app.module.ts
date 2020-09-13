import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { YearRouteModule } from './year/year-route.module';
import { SharedModule } from './shared/shared.module';
import { ComposeMessageComponent } from './compose.component';
import { AdminModule } from './admin/admin.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthComponent,
    DayComponent,
    NotFoundComponent,
    ComposeMessageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    YearRouteModule,
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
