import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  urlPhotos = [
		"http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg",
		"http://www.planwallpaper.com/static/images/cool-background.jpg",
		"http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg",
		"http://www.planwallpaper.com/static/images/recycled_texture_background_by_sandeep_m-d6aeau9_PZ9chud.jpg",
		"http://www.planwallpaper.com/static/images/cool-background.jpg",
		"http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg"
	];

	urlLocalPhotos =[
		"../../../assets/images/1.jpg",
		"../../../assets/images/2.jpg",
		"../../../assets/images/3.jpg",
		"../../../assets/images/4.jpg",
		"../../../assets/images/1.jpg",
		"../../../assets/images/2.jpg",
		"../../../assets/images/3.jpg",
		"../../../assets/images/4.jpg",
		"../../../assets/images/1.jpg",
		"../../../assets/images/2.jpg",
		"../../../assets/images/3.jpg",
		"../../../assets/images/4.jpg",
		"../../../assets/images/1.jpg",
		"../../../assets/images/2.jpg",
		"../../../assets/images/3.jpg",
		"../../../assets/images/4.jpg",
	]

  getName(name: string): string{
  	return name.substring(name.lastIndexOf(name));
  }
  onSelect(name: string){
  	this.router.navigate(["/photos", this.getName(name)])
  }

}
