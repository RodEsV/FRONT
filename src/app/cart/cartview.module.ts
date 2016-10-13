import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CartviewComponent } from './cartview.component';
import { CartComponent } from './product/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
  	CartviewComponent, 
  	CartComponent
  	],
  exports: [CartviewComponent]

})
export class CartviewModule { }



