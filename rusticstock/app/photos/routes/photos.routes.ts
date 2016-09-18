import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from '../photos.component';

const photosRoutes: Routes = [
  { path: 'photos', component: PhotosComponent }
];

export const photosRouting: ModuleWithProviders = RouterModule.forChild(photosRoutes);
