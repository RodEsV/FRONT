import { NgModule } from '@angular/core';
import { ContactCOmponent } from '../contact/contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  exports: [ ContactComponent ]
})

export class ContactModule {
  constructor(){}
}
