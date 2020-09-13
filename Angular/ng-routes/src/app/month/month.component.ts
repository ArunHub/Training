import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent implements OnInit {

  constructor() { }

  @Input() year;

  ngOnInit() {
  }

  public month = 'june';

}
