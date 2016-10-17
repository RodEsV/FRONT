import { Component, OnInit } from '@angular/core';
import { Product } from './product.component';
import { products } from './mock-products';
import { Router } from '@angular/router';


@Component({

  selector: 'app-cart',
   styleUrls:  ['./cart.component.css'],
   templateUrl: './cart.component.html'


})
export class CartComponent implements OnInit {


  constructor() { }

   

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

  

  ngOnInit() {}
  
}

