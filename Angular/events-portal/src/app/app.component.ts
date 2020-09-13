import { Component } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor() {
        
    }
    pageTitle: string = "Welcome to synechron pvt lted";
    subTitle: string = "This site is maintained by Synechron HR, Pune!";
}