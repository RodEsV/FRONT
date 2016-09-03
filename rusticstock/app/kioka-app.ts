import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component(
  {
    selector: 'kioka-app',
    template:  `
    <link rel="stylesheet" type="text/css" href="app/css/utils.css">
    <video autoplay loop muted poster="screenshot.jpg" id="background">
        <source src="home_video.mov" type="video/mp4">
    </video>
    `
  }
)

class HomeComponent
{

}

bootstrap(HomeComponent);
