import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from '../app.component';
import { HomeModule } from '../../home/module/home.module';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ModelsModule } from '../../models/models.module';
import { routing,appRoutingProviders } from '../routes/app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { AboutModule } from '../../about/module/about.module';

@NgModule({
  imports: [
    HttpModule,
    JsonpModule,
    routing,
    BrowserModule,
    FormsModule,
    HomeModule,
    AboutModule,
    Ng2Bs3ModalModule
  ],
  providers: [ appRoutingProviders],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
