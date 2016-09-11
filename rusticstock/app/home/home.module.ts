import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu/menu.component';
import { BarsearchComponent } from './barsearch/barsearch.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';

@NgModule({
  imports: [
    Ng2Bs3ModalModule
  ],
  declarations: [
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
