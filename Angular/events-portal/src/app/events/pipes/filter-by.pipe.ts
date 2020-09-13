import { Pipe, PipeTransform } from '@angular/core';

import { Event } from "../models/event";

@Pipe({
    name: 'filterBy'
})

export class FilterPipe implements PipeTransform {
    transform(value: Event[], ...args: any[]): Event[] {
        let filter: string = args[0]?args[0].toLocaleLowerCase(): null;
        console.log(filter)

        return filter ? value.filter((event: Event) => event.eventName.toLocaleLowerCase().indexOf(filter)!= -1): value;
    }
}