import {
  Component,
  ViewChild,
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
import { UserComponent } from '../../models/user.component';
import { LoginService } from './services/login.service';


@Component({
  moduleId: module.id,
  selector: 'login-comp',
  templateUrl: 'login.html',
  styleUrls: ['login.css'],
  providers: [ LoginService ]
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
      name: [""],
      nickname: [""],
      email: [""],
      password: [""],
      password_confirmation: [""]
    })
  }

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
      console.log("checking!!");
    }
  }

  loginUser(){
    this.loginService.loginUser(JSON.stringify(this.loginForm.value))
    .subscribe( 
      response => this.responseLogIn = response,
      error => this.errorMessage = <any>error)
    if(this.responseLogIn){
      this.modal.close();
    }
  }

  logoutUser(){

  }

  signUpUser(){
    if(this.signUpForm.controls['name'].value == ""){
      this.signUpForm.controls['name'].setValue("default");
    } 
    if(this.signUpForm.controls['nickname'].value == "") {
      this.signUpForm.controls['nickname'].setValue("default");
    }
    this.loginService.signUpUser(JSON.stringify(this.signUpForm.value))
    .subscribe(
      response => this.responseSignUp = response,
      error => this.errorMessage = error
      );
  }



  onSubmit(){
    this.submitted = true;
  }
}

