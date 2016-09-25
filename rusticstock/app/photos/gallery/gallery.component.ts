import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'gallery-comp',
  templateUrl: 'gallery.html',
  styleUrls: ['gallery.css']
})

export class GalleryComponent{
	constructor(){}
	urlPhotos = [
		"../../../images/1.jpg",
		"../../../images/2.jpg",
		"../../../images/3.jpg",
		"../../../images/4.jpg",
		"../../../images/5.jpg",
		"../../../images/6.jpg"
	];
}

