import { Component, Input, ComponentFactoryResolver, ViewChild, OnDestroy, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { NotificationItem } from './notification.item';
import { NotificationDirective } from './notification.directive';
import { Notification } from './notification.model'

@Component({
    selector: 'notification',
    template: `
        <ng-template notify-item></ng-template>
    `
})

export class NotificationComponent implements OnDestroy, OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.notificationItem.currentValue) {
            this.loadComponent();
        }        
    }
    constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnDestroy() {
        console.log('destroyed')
        clearInterval(this.timeout);
    }

    @Input('notificationDir') notificationItem: NotificationItem;
    @ViewChild(NotificationDirective) notificationHost: NotificationDirective;

    timeout;

    loadComponent(): void {
        let notification = this.notificationItem;
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(notification.component);

        let viewContainerRef = this.notificationHost._viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (<Notification>componentRef.instance).data = notification.data;
    }

    getNotified() {
        this.timeout = setTimeout(() => {
            this.loadComponent();
        }, 3000);
    }
}