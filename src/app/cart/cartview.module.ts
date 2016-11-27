import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { CartviewComponent } from './cartview.component';
import { CartComponent } from './product/cart.component';
import { CartViewService } from "./cart-view.service";
import { RouterModule, RouterOutlet } from "@angular/router";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
  	CartviewComponent,
  	CartComponent
  	],
  providers: [CartViewService],
  exports: [CartviewComponent]

})
export class CartviewModule { }



