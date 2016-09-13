import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';

const routes: Routes = [
  {path: 'aboutus', component: AboutComponent },
  {path: '', component: HomeComponent}
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
