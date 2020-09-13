import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Eventform{
    constructor(){

    }

    eventForm = new FormGroup({
        eventId: new FormControl(0, Validators.required),
        eventCode: new FormControl('FAKECD', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
        eventName: new FormControl("No Event", Validators.required),
        description: new FormControl(),
        startDate: new FormControl(),
        endDate: new FormControl(),
        fees: new FormControl(0),
        seatsFilled: new FormControl(0, [Validators.min(0), Validators.max(100)]),
        logo: new FormControl("images/noimage.png")
    })
}