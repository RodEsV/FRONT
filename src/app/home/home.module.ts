import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BarsearchComponent } from './barsearch/barsearch.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	HomeComponent, 
  	BarsearchComponent, 
  	InfoComponent, 
  	LoginComponent, 
  	MenuComponent
  	],
	exports: [ HomeComponent ]
})
export class HomeModule { }
