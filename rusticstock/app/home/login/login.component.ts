import {
  Component,
  ViewChild
} from '@angular/core';
import {ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
  selector: 'login-comp',
  templateUrl: 'app/home/login/login.html',
  styleUrls: ['app/home/login/login.css'],
})

export class LoginComponent {
  constructor(){}
  @ViewChild('modal')
  modal: ModalComponent;
  open(){
    this.modal.open()
  }
}
