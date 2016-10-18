import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from "./gallery.service";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ GalleryService ]
})
export class GalleryComponent implements OnInit {

  constructor(private router: Router, private galleryService: GalleryService) { }
  errorMessage:string;
  urlLocalPhotos:any;
  response:any;
	assignData(data){
		console.log(data.json()[0].image_link);
		this.urlLocalPhotos = data.json();
  }

  ngOnInit() {
  	this.getImages();
  }

  getImages(){
		this.galleryService.getImages().
		subscribe(
			response => this.response = response,
			error => this.errorMessage = error,
			() => this.assignData(this.response)
			)
  }

  

  urlPhotos = [
		"http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg",
		"http://www.planwallpaper.com/static/images/cool-background.jpg",
		"http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg",
		"http://www.planwallpaper.com/static/images/recycled_texture_background_by_sandeep_m-d6aeau9_PZ9chud.jpg",
		"http://www.planwallpaper.com/static/images/cool-background.jpg",
		"http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg"
	];
/*
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
*/
	

  getName(name: string): string{
	return name.substring(name.lastIndexOf("/")+1,name.lastIndexOf("."));
  }
  onSelect(name: string){
	this.router.navigate(["/photos", this.getName(name)])
  }

}

