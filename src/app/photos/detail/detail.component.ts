import { Component, OnInit } from '@angular/core';
import {
	Router,
	ActivatedRoute,
	Params
	} from '@angular/router';
import { DetailService } from "./detail.service";
import { GalleryService } from "../gallery/gallery.service";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DetailService, GalleryService]
})
export class DetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private detailService: DetailService, private galleryService: GalleryService) { }
  imageLink: string;
  nameProduct: string;
  response: any;
  errorMessage: string;

  assignData(data){
    console.log("getImage log", data.json().image_link);
    this.imageLink = data.json().image_link.replace('"','');
    this.nameProduct = data.json().name
  }

  getImage(id){
    this.galleryService.getImage(id).
    subscribe(
      response => this.response = response,
      error => this.errorMessage = error,
      () => this.assignData(this.response)
      )
  }

  ngOnInit() {
  	this.route.params.forEach((params: Params) =>{
  		//let id = +params['id']
      // Implement promise when api available
  		//this.detailService.getImage(params['id']).then(photo => this.image = photo );
      //this.image = this.detailService.getImage(params['id'])+".jpg";
      //this.image = this.detailService.getImage(params['id']);
      console.log("params; ", params['id'])
      this.getImage(params['id'])

  	})
  }


}
