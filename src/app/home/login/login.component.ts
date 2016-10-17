import {
  Component,
  ViewChild,
  ViewEncapsulation,
  OnInit
} from '@angular/core';

import { 
  FormBuilder,
  AbstractControl,
  FormGroup, 
  Validators,
  FormControl,
  FormArray
} from '@angular/forms';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LoginService } from './login.service';

import { EmailValidator } from './email.validator';
import { EqualPasswordsValidator } from "./equalPasswords.validator";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
  encapsulation:ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor( private loginService: LoginService, private fb: FormBuilder){}
  @ViewChild('modallogin')
  modallogin: ModalComponent;
  loginForm: FormGroup;

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: [""],
      password: [""]
    });
  }
  //, 
  active: boolean = true;
  errorMessage: string;
  submitted: boolean = true;

  responseLogout: boolean = true;
  responseLogIn: any;
  responseSignUp: any;

  open(){
    this.modallogin.open();
  }

  close(){
    if(this.responseLogIn){
      this.modallogin.close();
    }
  }
  
  resultResponse:any;
  assignData(data:any){ 
    this.resultResponse = data;  
  }

  
  loginUser(){
    console.log(JSON.stringify(this.loginForm.value));
    this.loginService.loginUser(JSON.stringify(this.loginForm.value))
    .subscribe(
      response => this.responseLogIn = response,
      error => this.errorMessage = error,
      ()=> {this.close(); this.assignData(this.responseLogIn);}
      );
  }

  test(aux:any){
    console.log("resultResponse", this.resultResponse);
    console.log("headers", this.responseLogIn.headers.keys());
  }
  
  // La variable resultResponse tiene el objeto Response pero hay algo raro en los headers
  logOutUser(){
    
    let infoJSON = this.resultResponse.json().data;
    this.loginService.logOutUser( infoJSON.auth_token , infoJSON.data.email, this.responseLogIn.headers['Client'] )
  }


  /*onSubmit(values:Object):void{
    this.submitted = true;
    if (this.signUpForm.valid){
      console.log(values);
    }
  }*/

}
