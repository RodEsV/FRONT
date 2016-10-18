import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailComponent } from './detail/detail.component';
import { HomeModule } from "../home/home.module";
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    JsonpModule,
    HttpModule,
    HomeModule
  ],
  declarations: [
  	PhotosComponent, 
  	GalleryComponent, DetailComponent
  	],
  exports: [PhotosComponent],

})
export class PhotosModule { }
