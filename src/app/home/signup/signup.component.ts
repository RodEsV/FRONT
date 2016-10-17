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
import { SignupService } from './signup.service';

import { EmailValidator } from './email.validator';
import { EqualPasswordsValidator } from "./equalPasswords.validator";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService],
  encapsulation:ViewEncapsulation.None
})
export class SignupComponent implements OnInit {

  constructor( private signupService: SignupService, private fb: FormBuilder){}
  @ViewChild('modal')
  modal: ModalComponent;
  signUpForm: FormGroup;

  ngOnInit(){
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

  responseSignUp: any;

  open(){
    this.modal.open();
  }

  close(){
    if(this.responseSignUp ){
      this.modal.close();
    }
  }
  
  resultResponse:any;
  assignData(data:any){ 
    this.resultResponse = data;  
  }

  test(aux:any){
    console.log("resultResponse", this.resultResponse);
    console.log("headers", this.responseSignUp.headers.keys());
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


    console.log(JSON.stringify({name, email, password, password_confirmation}));
    
    this.signupService.signUpUser(JSON.stringify({password, password_confirmation, email, name}))
    .subscribe(
      respnse => this.responseSignUp = respnse,
      error => this.errorMessage = error
      );
    /*this.loginService.signUpUser(JSON.stringify(this.signUpForm.value))
    .subscribe(
      response => this.responseSignUp = response,
      error => this.errorMessage = error
      );*/
  }



  onSubmit(values:Object):void{
    this.submitted = true;
    if (this.signUpForm.valid){
      console.log(values);
    }
  }

}
