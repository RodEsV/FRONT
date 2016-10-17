import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';


import { HomeComponent } from './home.component';
import { BarsearchComponent } from './barsearch/barsearch.component';
import { InfoComponent } from './info/info.component';
import { RegistrationComponent } from './registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { LogoComponent } from './logo/logo.component';


@NgModule({
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    Ng2Bs3ModalModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    LogoComponent,
  	HomeComponent, 
  	BarsearchComponent, 
  	InfoComponent, 
  	RegistrationComponent, 
  	MenuComponent, 
    LogoComponent
  	],
	exports: [ HomeComponent, InfoComponent, LogoComponent, RegistrationComponent]
})
export class HomeModule { }
