import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html'
})

export class EventDetailsComponent implements OnInit{

    ngOnInit(): void {
        let eventId: number = this._activatedRoute.snapshot.params["id"];
        this._eventsService.getSingleEvent(eventId).subscribe(
            data=>this.event = data,
            erro => console.log(erro),
            () => console.log('finished')
        )
    }
    constructor(private _eventsService: EventsService,
        private _activatedRoute: ActivatedRoute) { }

    pageTitle: string = "Event Details of - ";
    // @Input('selEventId') eventId: number;
    event: Event;
    // @Output()
}