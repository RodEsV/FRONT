import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photos.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailComponent } from './detail/detail.component';
import { HomeModule } from "../home/home.module";
import { HttpModule, JsonpModule } from '@angular/http';
import { Ng2Bs3ModalModule } from "ng2-bs3-modal/ng2-bs3-modal";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    JsonpModule,
    HttpModule,
    HomeModule,
    Ng2Bs3ModalModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  	PhotosComponent,
  	GalleryComponent, DetailComponent
  	],
  exports: [PhotosComponent],

})
export class PhotosModule { }
