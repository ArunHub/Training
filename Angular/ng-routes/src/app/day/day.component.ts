import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() upDay = new EventEmitter();

  public day = 'weekend mode';
}
