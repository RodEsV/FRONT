import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
  <div>
    <router-outlet></router-outlet>
    <home-comp></home-comp>
  </div>
  `
})
export class AppComponent { }
