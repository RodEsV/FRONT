import { NgModule } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home.component';
import { MenuComponent } from '../menu/menu.component';
import { BarsearchComponent } from '../barsearch/barsearch.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule } from '@angular/forms';
import { ModelsModule } from '../../models/models.module';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from '../../root/routes/app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { InfoComponent } from '../information/info.component';
import { LoginDirective } from '../login/directives/login.directives';
import { ReactiveFormsModule } from '@angular/forms' ;



@NgModule({
  imports: [
    ReactiveFormsModule,
    routing,
    BrowserModule,
    ModelsModule,
    FormsModule,
    Ng2Bs3ModalModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    LoginDirective,
    InfoComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    BarsearchComponent
  ],
  exports: [ HomeComponent ]
})

export class HomeModule {
  constructor(){ }
}
