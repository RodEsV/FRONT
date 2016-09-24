import { ModuleWithProviders } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../notFound.component';

const notFoundRoutes = [
	//{ path: '**', component: PageNotFoundComponent}
	// TODO Ponerlo como última ruta 
];

export const notFoundRouting: ModuleWithProviders = RouterModule.forChild(notFoundRoutes);