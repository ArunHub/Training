
import { Injectable } from '@angular/core';
import { NotificationItem } from './notification.item';
import { AlertComponent } from '../alert/alert.component';

@Injectable({providedIn: 'root'})
export class NotificationService {

    constructor() { }    

    getNotification(message): NotificationItem{
        return new NotificationItem(AlertComponent, message || 'message');
    }
}