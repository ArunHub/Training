import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[notify-item]'
})
export class NotificationDirective{
    constructor(public _viewContainerRef: ViewContainerRef){}
}