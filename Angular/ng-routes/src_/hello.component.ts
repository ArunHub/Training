import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'Hello',
  template: `
    <h1>Hello {{name}}!</h1>
    {{runChangeDetection}}
    <div>{{config.position}}</div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {
  @Input() name: string;
  @Input() config;

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
}