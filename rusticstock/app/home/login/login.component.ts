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
  modal: ModalComponent;
  model = new UserComponent("rod","123");
  active: boolean = true;
  mode = 'Observable';
  errorMessage: string;

  open(){
    this.modal.open()
  }

  loginUser( email: string, password: string) {
    console.log(email,password);
    if (!email || !password) { return ;}
    this.loginService.loginUser(email, password)
    .subscribe(
      error => this.errorMessage = <any>error);
  }

  getInfo()
  {
    this.model = new UserComponent("","")
    this.active = false;
    setTimeout (() => this.active = true,0);
  }
}
