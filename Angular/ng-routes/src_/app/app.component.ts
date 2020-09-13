import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onClick() { this.config = {
    position: 3
  } }
  config = {
    position: 5
  }
  title = 'app';
}
