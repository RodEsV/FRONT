import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	PhotosComponent, 
  	GalleryComponent
  	],
  exports: [PhotosComponent]

})
export class PhotosModule { }
