import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sep-menu',
    templateUrl: './sep-menu-component.html'
})

export class SepMenuComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    menuItems: string[] = [
        "Synechron Ep",
        "Home",
        "Events",
        "Employees",
        "Jph Posts",
        "Users",
        "Register Event",
        "Login"
    ]
}