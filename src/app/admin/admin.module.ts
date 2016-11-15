import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminUploadImagesComponent } from './admin-upload-images/admin-upload-images.component';
// se usan los corchetes cuando el elemento está exportado
import FileDroppa from 'file-droppa';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FileDroppa
  ],
  declarations: [
    AdminComponent,
    AdminLoginComponent,
    AdminUploadImagesComponent,
    SidebarAdminComponent,
    NavbarAdminComponent
  ]
})
export class AdminModule { }
