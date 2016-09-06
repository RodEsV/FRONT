import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { BarsearchComponent } from './barsearch/barsearch.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    MenuComponent,
    BarsearchComponent,
    ModalComponent
  ],
  exports: [ HomeComponent ]
})

export class HomeModule {
  constructor(){ }
}
