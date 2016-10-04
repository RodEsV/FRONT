import { NgModule } from '@angular/core';
import { PhotosComponent } from '../photos.component';
import { photosRouting } from '../routes/photos.routes';
import { GalleryComponent } from '../gallery/gallery.component';
import { ImageComponent } from '../images/image.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    photosRouting,
    CommonModule
  ],
  declarations: [
    ImageComponent,
    PhotosComponent,
    GalleryComponent
  ]
})

export class PhotosModule{
  constructor(){}
}
