import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from '../notFound.component';
import { notFoundRouting } from '../routes/notFound.routes';

@NgModule({
	imports: [
		notFoundRouting
	],
  declarations: [
    PageNotFoundComponent
  ],
  exports: [ PageNotFoundComponent ]
})

export class PageNotFoundModule {
  constructor(){}
}
