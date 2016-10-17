import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	private loginComponent : LoginComponent;
	private signupComponent : SignupComponent;


  constructor() { }

  ngOnInit() {
  }

  onSelect(s : string){
  	if(s == "login"){
  		this.loginComponent.open();
  	}
  	else if(s == "signup"){
  		this.signupComponent.open();
  	}
  }

}
