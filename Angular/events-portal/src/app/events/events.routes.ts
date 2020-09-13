import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsListComponent } from "./events-list/events-list.component";
import { NewEventComponent } from "./new-event/new-event.component";
import { EventDetailsComponent } from "./events-details/event-details.component";
import { AuthGuardService } from "./services/auth-guard.service";

const eventsRouteConfig: Routes = [
    {path: '', component: EventsListComponent, canActivate: [AuthGuardService]},
    {path: 'new', component: NewEventComponent, canActivate: [AuthGuardService]},
    {path: ':id', component: EventDetailsComponent, canActivate: [AuthGuardService]},
]

export const eventsRoutes: ModuleWithProviders = RouterModule.forChild(eventsRouteConfig);