import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../notFound.component';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  exports: [ PageNotFoundComponent ]
})

export class PageNotFoundModule {
  constructor(){}
}
