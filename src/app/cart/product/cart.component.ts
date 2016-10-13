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
   //let temp: number;

   //temp = 0;
       
   price = 50000 + 20000 + 30000 + 60000 + 80000 + 80000 + 100000;
        //for (let product in products) {
          //let price = temp + product.price;
          //temp = price;
//}

        return price;
    
  }

  price = this.totalPrice(products);

  constructor() { }

  ngOnInit() {}
  
}

