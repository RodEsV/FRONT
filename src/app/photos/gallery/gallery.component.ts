import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GalleryService } from "./gallery.service";
import { LoginService } from "../../home/login/login.service";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailValidator } from "../../home/login/email.validator";


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [ GalleryService ]
})
export class GalleryComponent implements OnInit {

  constructor(private router: Router, private galleryService: GalleryService, private _loginService: LoginService,
  private fb: FormBuilder) { }
  errorMessage:string;
  urlLocalPhotos:any;
  response:any;

  @ViewChild('modalLogin')
  modal: ModalComponent;

  openModal(){
    if( !this._loginService.responseLogIn ){
      this.modal.open("sm");
    }
    // falta llamar aqui a la ruta para agregar el producto
  }

  loginForm: FormGroup;
  responseLogin: any;


	assignData(data){
		this.urlLocalPhotos = data.json();
  }

  ngOnInit() {
  	this.getImages();

  	this.loginForm = this.fb.group({
      email: ["", Validators.compose([Validators.required, EmailValidator.validate ])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(6)])]
  	})
  }

  getImages(){
		this.galleryService.getImages().
		subscribe(
			response => this.response = response,
			error => this.errorMessage = error,
			() => this.assignData(this.response)
			)
  }

  close(){
    this.modal.close();
  }

  assignDataLogin(response){
    this.responseLogin = response;
  }

  sendCredentials(){
    this._loginService.loginUser(JSON.stringify(this.loginForm.value))
      .subscribe(
        response => this.responseLogin = response,
        error => this.errorMessage = error,
        ()=> {
          this.close();
          this.assignDataLogin(this.responseLogin);
        }
      );
    }


  urlPhotos = [
		"http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg",
		"http://www.planwallpaper.com/static/images/cool-background.jpg",
		"http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg",
		"http://www.planwallpaper.com/static/images/recycled_texture_background_by_sandeep_m-d6aeau9_PZ9chud.jpg",
		"http://www.planwallpaper.com/static/images/cool-background.jpg",
		"http://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg"
	];

  getName(name: string): string{
	return name.substring(name.lastIndexOf("/")+1,name.lastIndexOf("."));
  }
  onSelect(name: string){
  	console.log("name: ", name)
	//this.router.navigate(["/photos", this.getName(name)])
	this.router.navigate(["/photos", name])
  }

}

