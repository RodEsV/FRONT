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
  @ViewChild('modal')
  modal: ModalComponent;
  loginForm: FormGroup;
  signUpForm: FormGroup;

  ngOnInit(){
    this.loginForm = this.fb.group({
      email: [""],
      password: [""]
    });
    this.signUpForm = this.fb.group({
      name: ["", Validators.minLength(3)],
      nickname: ["", Validators.minLength(3)],
      email: ["", Validators.compose([Validators.required, EmailValidator.validate])],
      passwords: this.fb.group({
        password: ["", Validators.minLength(6)],
        password_confirmation: ["", Validators.minLength(6)],
      },
      { validator: EqualPasswordsValidator.validate('password','password_confirmation')})
    })
  }
  //,
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

  check(){
    if (this.responseLogIn || this.responseSignUp){
      return true;
    }
    return false;
  }
  resultResponse:any;
  assignData(data:any){
    this.resultResponse = data;
  }


  loginUser(){
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
    console.log(infoJSON.email);
    this.loginService.logOutUser(infoJSON.email)
      .subscribe(
        response => this.responseLogout = response,
        error => this.errorMessage = error,
        () => {this.assignData((this.responseLogout))}
      )
    console.log(this.resultResponse);
  }

  signUpUser(){
    if(this.signUpForm.controls['name'].value == ""){
      this.signUpForm.controls['name'].setValue("default");
    }
    if(this.signUpForm.controls['nickname'].value == "") {
      this.signUpForm.controls['nickname'].setValue("default");
    }
    let name = this.signUpForm.controls['name'].value
    let nickname = this.signUpForm.controls['nickname'].value
    let email = this.signUpForm.controls['email'].value
    let password = (<FormGroup> this.signUpForm.controls['passwords']).controls['password'].value
    let password_confirmation = (<FormGroup> this.signUpForm.controls['passwords']).controls['password_confirmation'].value


    this.loginService.signUpUser(JSON.stringify({name, nickname, email, password, password_confirmation}))
    .subscribe(
      response => this.responseSignUp = response,
      error => this.errorMessage = error,
      () => {this.close();}
      );
  }



  onSubmit(values:Object):void{
    this.submitted = true;
    if (this.signUpForm.valid){
      console.log(values);
    }
  }

}
