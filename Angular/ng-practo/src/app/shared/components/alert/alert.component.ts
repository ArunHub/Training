import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert',
  template: '<strong [innerText]="data"></strong>',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() private data;

}
