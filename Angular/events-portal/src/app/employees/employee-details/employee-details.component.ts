import { Component, Input, EventEmitter, Output } from "@angular/core";

import { Employee } from "../models/employee";

@Component({
    selector: "employee-details",
    templateUrl: './employee-details.component.html'
})
export class EmployeeDetailsComponent {
    constructor() {
        
    }

    pageTitle: string = "Details of -";
    @Input('selEmployee') employee: Employee
    @Output('confirmation') sendConfirmation: EventEmitter<string> = new EventEmitter<string>();

    onSendConfirmation(): void{
        this.sendConfirmation.emit('Employee Record Received successfully');
    }
}