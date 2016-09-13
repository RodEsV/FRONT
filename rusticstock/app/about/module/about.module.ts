import { NgModule } from '@angular/core';
import { AboutComponent } from '../about.component';
import { routing, appRoutingProviders } from '../../root/routes/app.routes';

@NgModule({
  declarations: [
    AboutComponent
  ],
  exports: [ AboutComponent ]
})

export class AboutModule {
  constructor(){}
}
