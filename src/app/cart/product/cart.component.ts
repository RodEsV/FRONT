import { Component, OnInit } from '@angular/core';
import { Product } from './product.component';
import { products } from './mock-products';


@Component({

  selector: 'app-cart',
   styleUrls:  ['./cart.component.css'],
   templateUrl: './cart.component.html'


})
export class CartComponent implements OnInit {

   
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

  price = this.totalPrice(products);

  constructor() { }

  ngOnInit() {}
  
}

