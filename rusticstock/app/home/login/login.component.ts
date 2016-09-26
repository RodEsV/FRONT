import {
  Component,
  ViewChild
} from '@angular/core';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { UserComponent } from '../../models/user.component';
import { LoginService } from './services/login.service';


@Component({
  moduleId: module.id,
  selector: 'login-comp',
  templateUrl: 'login.html',
  styleUrls: ['login.css'],
  providers: [ LoginService ]
})

export class LoginComponent {
  constructor( private loginService: LoginService){}
  @ViewChild('modal')
  modal: ModalComponent;

  modelLogin =  new UserComponent("","","","");
  modelSignUp = new UserComponent("","","","");

  active: boolean = true;
  errorMessage: string;
  submitted: boolean = true;

  responseLogout: boolean = true;
  responseLogIn: any;
  responseSignUp: any;

  open(){
    this.modal.open();
  }

  close(){
    if(this.responseLogIn || this.responseSignUp ){
      this.modal.close();
    }
  }

  loginUser( email: string, password: string) {
    if (!email || !password) { return ;}
    this.loginService.loginUser(email, password)
    .subscribe(
      response => this.responseLogIn = response,
      error => this.errorMessage = <any>error);
    this.modelLogin = new UserComponent("","","","");
    this.active = false;
    setTimeout( () => this.active = true,2);  
  }

  logoutUser(){

  }


   name: string = "default";
  userName: string = "default";
  
  signUpUser(name:string, userName: string, email: string, password: string, confirmPass: string) {
    console.log(this.name,email,password, confirmPass, userName);
    if (!email || !password || !confirmPass) { return; }
    if (!name){
      name = this.name;
    }
    if (!userName){
      userName = this.userName;
    }
    this.loginService.signUpUser(name, userName,email,password,confirmPass)
    .subscribe(
      responseSignUp => this.responseSignUp = responseSignUp,
      error => this.errorMessage = <any> error);
    

      this.modelSignUp = new UserComponent("","","","","");
      this.active = false;
      setTimeout( () => this.active = true,2);
  }



  onSubmit(){
    this.submitted = true;
  }
}

