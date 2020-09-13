import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MessageService {

    constructor() { }

    private messageSrc = new Subject<string>();

    messageStream$ = this.messageSrc.asObservable();

    broadcastMsg(msg: string): void{
        this.messageSrc.next(msg);
    }
}