import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	PhotosComponent, 
  	GalleryComponent, DetailComponent
  	],
  exports: [PhotosComponent]

})
export class PhotosModule { }
