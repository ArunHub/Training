import { Component } from '@angular/core';

@Component({
  template: `
    <h3>ADMIN</h3>
    <nav>
      <a routerLink="./" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
      <a routerLink="./year" routerLinkActive="active">Manage year</a>
      <a routerLink="./day" routerLinkActive="active">Manage day</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AdminComponent {
}