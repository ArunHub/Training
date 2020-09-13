import { Component, OnInit } from '@angular/core';

import { Event } from '../models/event';

import { EventsService } from '../services/events.service';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit{
    ngOnInit(): void {
        this._eventsService.getAllEvents().subscribe(
            data => {
                console.log('xxxxxxxxxxxxx')
                return this.events = data
            },
            erro => console.log(erro),
            () => console.log("Events service call completed")                        
        );
    }
    constructor(private _eventsService: EventsService) { }

    pageTitle: string = "Synechron events List";
    subTitle: string = "Published by HR Team";
    events: Event[] = [];
    // selectedEvent: Event;
    // onEventSelect(event: Event): void {
    //     this.selectedEvent = event;
    // }
}