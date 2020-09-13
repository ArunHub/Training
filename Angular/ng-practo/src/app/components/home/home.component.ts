import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `<h1>Welcome to Synechron Home Page</h1><h6>Dont get suprised by empty space</h6>`
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}