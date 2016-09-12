import {
  Component,
  ViewChild
} from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { UserComponent } from '../../models/user.component';

@Component({
  selector: 'login-comp',
  templateUrl: 'app/home/login/login.html',
  styleUrls: ['app/home/login/login.css'],
})

export class LoginComponent {
  constructor(){}
  @ViewChild('modal')
  modal: ModalComponent;
  model = new UserComponent("rod","123");
  active: boolean = true;


  open(){
    this.modal.open()
  }

  getInfo()
  {
    this.model = new UserComponent("","")
    this.active = false;
    setTimeout (() => this.active = true,0);
  }
}
