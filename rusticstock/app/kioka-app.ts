import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component(
  {
    selector: 'kioka-app',
    template:  `
    <div>
      Kioka App
    </div>
    `
  }
)

class HomeComponent
{

}

bootstrap(HomeComponent);
