import { NgModule } from '@angular/core';
import { PhotosComponent } from '../photos.component';
import { photosRouting } from '../routes/photos.routes';
import { GalleryComponent } from '../gallery/gallery.component';

@NgModule({
  imports: [
    photosRouting
  ],
  declarations: [
    PhotosComponent,
    GalleryComponent
  ]
})

export class PhotosModule{
  constructor(){}
}
