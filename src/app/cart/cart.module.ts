import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { CartComponent }  from './cart.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    CartComponent,
  ],
  })
export class CartModule {}
