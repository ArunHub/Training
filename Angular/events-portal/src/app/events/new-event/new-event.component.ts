import { Component, OnInit } from '@angular/core';
import { Eventform } from '../models/event-form';
import { EventsService } from '../services/events.service';

@Component({
    selector: 'new-event',
    templateUrl: './new-event.component.html',
    styles: [
        `
        input.ng-invalid {border-left: 3px solid red}
        input.ng-valid {border-left: 3px solid green}
        `
    ]
})

export class NewEventComponent implements OnInit {
    constructor(private _eventService: EventsService) { }

    ngOnInit() { }

    pageTitle: string = "Synechron New Event Registration";
    event: Eventform = new Eventform();

    onEventSubmission(): void{
        console.log();  
        this._eventService.registerEvent(this.event.eventForm.value).subscribe(
            data => console.log(data),
            err => console.log(err)
            
        )
    }
}