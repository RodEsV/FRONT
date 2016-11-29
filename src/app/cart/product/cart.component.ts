import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product.component';
import { products } from './mock-products';
import { LoginService } from "../../home/login/login.service";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailValidator } from "../../home/login/email.validator";
import { CartViewService } from "../cart-view.service";

@Component({

  selector: 'app-cart',
   styleUrls:  ['./cart.component.css'],
   templateUrl: './cart.component.html'


})
export class CartComponent implements OnInit {


  constructor(private _loginService: LoginService, private fb: FormBuilder, private _cartService: CartViewService) { }

  @ViewChild('modalLogin')
  modal: ModalComponent;
  loginForm: FormGroup;
  responseLogin: any;
  errorMessage:string;

  cartUser: any;

  assignDataLogin(response){
    this.responseLogin = response;
  }

  close(){
    this.modal.close();
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", Validators.compose([Validators.required, EmailValidator.validate ])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(6)])]
    })

    this.openModal();
  }


  getCart(id: number){
    var headers = [
      this.responseLogin.headers._headers.get('access-token')[0],
      this.responseLogin.headers._headers.get('client')[0],
      this.responseLogin.headers._headers.get('expiry')[0],
      this.responseLogin.headers._headers.get('token-type')[0],
      this.responseLogin.headers._headers.get('uid')[0],
    ]
    this._cartService.getCart(id, headers);
  }

  sendCredentials(){
    console.log("Send credentials" + JSON.stringify(this.loginForm.value))
    this._loginService.loginUser(JSON.stringify(this.loginForm.value))
      .subscribe(
        response => this.responseLogin = response,
        error => this.errorMessage = error,
        ()=> {
          this.close();
          this.assignDataLogin(this.responseLogin);
        }
      );
  }

  openModal(){
    this.modal.open("sm");
    this.getCart(this.responseLogin)
  }

  products = products;
  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  totalPrice(products: Product[]): number {

   let price: number;

   price = 0;

   for (var _i = 0; _i < products.length; _i++) {
    price = price + products[_i].price;;
    }

    return price;

  }

  items = products.length;

  price = this.totalPrice(products);

}

