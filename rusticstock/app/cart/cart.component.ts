import { Component, ViewChild } from '@angular/core';
import { Product } from '../models/product.component';
import { products } from './mock-products';


@Component({
  moduleId: module.id,
  selector: 'cart-component',
   styleUrls:  ['cart.component.css'],
   templateUrl: 'cart.component.html'


})
export class AppComponent {
  title = 'Product Purchased';
  products = products;
  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
