import { Component } from '@angular/core';
// ngOnInit is a lifecycle hook. Angular offers interfaces for tapping into critical moments in the component life cycle:
// a) at creation
// b) after each change
// c) at its eventual destruction

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
}
// We are turning app component into a 'router component'
