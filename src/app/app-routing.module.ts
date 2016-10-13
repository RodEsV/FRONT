import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component' ;
import { PhotosComponent } from './photos/photos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'photos', component: PhotosComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'contact', component: ContactComponent},
	{ path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RusticstockRoutingModule { }

export const routingComponents = [ 
	HomeComponent, 
	PhotosComponent, 
	NotfoundComponent, 
	AboutComponent, 
	ContactComponent ];

