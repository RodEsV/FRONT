import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product.component';
import { products } from './mock-products';
import { LoginService } from "../../home/login/login.service";
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailValidator } from "../../home/login/email.validator";


@Component({

  selector: 'app-cart',
   styleUrls:  ['./cart.component.css'],
   templateUrl: './cart.component.html'


})
export class CartComponent implements OnInit {


  constructor(private _loginService: LoginService, private fb: FormBuilder) { }

  @ViewChild('modalLogin')
  modal: ModalComponent;
  loginForm: FormGroup;
  responseLogin: any;
  errorMessage:string;

  assignDataLogin(response){
    this.responseLogin = response.json();
  }

  close(){
    this.modal.close();
  }

  sendCredentials(){
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



  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", Validators.compose([Validators.required, EmailValidator.validate ])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(6)])]
    })

    this.openModal();
  }

}

