import { NgModule } from '@angular/core';
import { PhotosComponent } from '../photos.component';

@NgModule({
  declarations: [
    PhotosComponent
  ],
  exports: [PhotosComponent]
})

export class PhotosModule{
  constructor(){}
}
