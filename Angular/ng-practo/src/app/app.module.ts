import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponentComponent } from './components/page-not-found-component/page-not-found-component.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpInterceptorService } from './shared/services';
import { AlertComponent } from './shared/components';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponentComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    NgbModule, 
    AppRoutingModule,
    SharedModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent] // dynamic component loading
})
export class AppModule { }
