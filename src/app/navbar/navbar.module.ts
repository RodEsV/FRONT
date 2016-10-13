import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  imports: [
    CommonModule,
    HomeModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
