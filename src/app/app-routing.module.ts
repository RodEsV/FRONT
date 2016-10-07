import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component' ;
import { PhotosComponent } from './photos/photos.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'photos', component: PhotosComponent},
	{ path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RusticstockRoutingModule { }

export const routingComponents = [ HomeComponent, PhotosComponent, NotfoundComponent ];