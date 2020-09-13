import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './events-details/event-details.component';
import { NewEventComponent } from './new-event/new-event.component';

import { CapitalCasePipe } from './pipes/capital-case.pipe';
import { FilterPipe } from './pipes/filter-by.pipe';

import { EventsService } from './services/events.service';
import { eventsRoutes } from './events.routes';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthTokenInterceptor } from './services/auth-interceptor.service';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule, eventsRoutes],
    exports: [],
    declarations: [EventsListComponent, EventDetailsComponent,NewEventComponent,CapitalCasePipe,FilterPipe],
    providers: [EventsService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthTokenInterceptor,
        multi: true
    },
    AuthGuardService],
})
export class EventsModule { }
