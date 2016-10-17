import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailComponent } from './detail/detail.component';
import { ImagesService } from "./images.service";
import { HomeModule } from "../home/home.module";


@NgModule({
  imports: [
    CommonModule,
    HomeModule
  ],
  declarations: [
  	PhotosComponent, 
  	GalleryComponent, DetailComponent
  	],
  exports: [PhotosComponent],
  providers: [ImagesService]

})
export class PhotosModule { }
