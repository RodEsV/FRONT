import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CartviewComponent } from './cartview.component';
import { CartComponent } from './product/cart.component';
import { CartViewService } from "./cart-view.service";
import { RouterModule } from "@angular/router";
import { Ng2Bs3ModalModule } from "ng2-bs3-modal/ng2-bs3-modal";



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    Ng2Bs3ModalModule,
    ReactiveFormsModule
  ],
  declarations: [
  	CartviewComponent,
  	CartComponent
  	],
  providers: [CartViewService],
  exports: [CartviewComponent]

})
export class CartviewModule { }



