import { NgModule } from '@angular/core';
import { PhotosComponent } from '../photos.component';
import { photosRouting } from '../routes/photos.routes';

@NgModule({
  imports: [
    photosRouting
  ]
  declarations: [
    PhotosComponent
  ]
})

export class PhotosModule{
  constructor(){}
}
