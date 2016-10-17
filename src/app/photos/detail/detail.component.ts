import { Component, OnInit } from '@angular/core';
import { 
	Router,
	ActivatedRoute,
	Params
	} from '@angular/router';
import { DetailService } from "./detail.service";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DetailService]
})
export class DetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private detailService: DetailService) { }
  image: string;

  ngOnInit() {
  	this.route.params.forEach((params: Params) =>{
  		//let id = +params['id']
      /*Waiting for implementation of service of images*/
      // Implement promise when api available
  		//this.detailService.getImage(params['id']).then(photo => this.image = photo );
      this.image = this.detailService.getImage(params['id']);
  	})
  }


}
