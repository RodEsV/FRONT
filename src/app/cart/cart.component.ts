import { Component } from '@angular/core';
import { Product } from './product.component';
import { products } from './mock-products';


@Component({
  moduleId: module.id,
  selector: 'cart-component',
   styleUrls:  ['app/cart/cart.component.css'],
   templateUrl: 'app/cart/cart.component.html'


})
export class CartComponent {
  title = 'Product Purchased';
  products = products;
  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
}
