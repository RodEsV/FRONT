import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from '../app.component';
import { HomeModule } from '../../home/module/home.module';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ModelsModule } from '../../models/models.module';
import { routing,appRoutingProviders } from '../routes/app.routes';

import { AboutModule } from '../../about/module/about.module';
import { PageNotFoundModule } from '../../not_found/module/notFound.module';
import { PhotosModule } from '../../photos/module/photos.module';


@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    routing,
    BrowserModule,
    FormsModule,
    AboutModule,
    PhotosModule,
    HomeModule,
    Ng2Bs3ModalModule,
  ],
  providers: [ appRoutingProviders],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
