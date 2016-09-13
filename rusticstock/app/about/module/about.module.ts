import { NgModule } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@NgModule({
  declarations: [
    AboutComponent
  ],
  exports: [ AboutComponent ]
})

export class AboutModule {
  constructor(){}
}
