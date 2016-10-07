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

import { HomeModule } from './home/home.module';
import { PhotosModule } from './photos/photos.module';
import { NotfoundModule } from './notfound/notfound.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RusticstockRoutingModule,
    Ng2Bs3ModalModule,
    HomeModule,
    PhotosModule,
    NotfoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
