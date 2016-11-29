import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from "../home/login/login.service";


@Component({
  selector: 'app-cartview',
  templateUrl: './cartview.component.html',
  styleUrls: ['./cartview.component.css'],
})
export class CartviewComponent implements OnInit {

  @Input() credentials;
  constructor(private  _loginService: LoginService) { }

  ngOnInit() {
    console.log("credentials ", this.credentials)
    console.log("login service ", this._loginService.responseLogIn);

  }



}
