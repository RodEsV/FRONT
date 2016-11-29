import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

import {
  RusticstockRoutingModule,
  routingComponents
} from './app-routing.module';
import { Angular2TokenService } from 'angular2-token';


import { HomeModule } from './home/home.module';
import { PhotosModule } from './photos/photos.module';
import { NotfoundModule } from './notfound/notfound.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { NavbarModule } from './navbar/navbar.module';
import { CartviewModule } from './cart/cartview.module';
import { AdminModule } from "./admin/admin.module";
import { CategoriesModule } from "./categories/categories.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AdminModule,
    RusticstockRoutingModule,
    Ng2Bs3ModalModule,
    HomeModule,
    PhotosModule,
    NotfoundModule,
    AboutModule,
    NavbarModule,
    CartviewModule,
    ContactModule,
    CategoriesModule,

  ],
  providers: [ Angular2TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
