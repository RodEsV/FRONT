import {
  Component,
  ViewChild
} from '@angular/core';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { UserComponent } from '../../models/user.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'login-comp',
  templateUrl: 'app/home/login/login.html',
  styleUrls: ['app/home/login/login.css'],
  providers: [LoginService]
})

export class LoginComponent {
  constructor( private loginService: LoginService){}
  @ViewChild('modal')
  @ViewChild('modalError')
  modal: ModalComponent;
  modalError: ModalComponent;

  modelLogin =  new UserComponent("","","","");
  modelSignUp = new UserComponent("","","","");
  active: boolean = true;
  mode = 'Observable';
  errorMessage: string;
  submitted: boolean = true;


  open(){
    this.modal.open()
  }

  loginUser( email: string, password: string) {
    console.log(email,password);
    if (!email || !password) { return ;}
    this.loginService.loginUser(email, password)
    .subscribe(
      error => this.errorMessage = <any>error);


    console.log("status" + this.loginService.status);
    this.modelLogin = new UserComponent("","","","");
    this.active = false;
    setTimeout( () => this.active = true,0);
  }
  name: string = "default";
  signUpUser(userName: string, email: string, password: string, confirmPass: string) {
    console.log(this.name,email,password, confirmPass, userName);
    if (!email || !password || !confirmPass) { return; }
    this.loginService.signUpUser(this.name, userName,email,password,confirmPass)
    .subscribe(
      error => this.errorMessage = <any> error);


      this.modelSignUp = new UserComponent("","","","");
      this.active = false;
      setTimeout( () => this.active = true,0);
  }


  onSubmit(){
    this.submitted = true;
  }
}
