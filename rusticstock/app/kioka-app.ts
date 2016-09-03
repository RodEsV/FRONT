import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component(
  {
    selector: 'kioka-app',
    template:  `
    <link rel="stylesheet" type="text/css" href="app/css/utils.css">
    <video autoplay loop muted poster="screenshot.png" id="background">
        <source src="home_video.mov" type="video/mp4">
    </video>
    <div class="text">
      Soy un cambio muy misifus
    </div>
    `,
    styles: ['position: inherit ;  width: 100% ; height: 100%']
  }
)

class HomeComponent
{

}

bootstrap(HomeComponent);
