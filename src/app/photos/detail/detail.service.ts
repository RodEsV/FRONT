import { Injectable } from '@angular/core';

@Injectable()
export class DetailService {

  constructor() { }
  // metodo para encontrar la imagen 
  getImage(idImage: string){
  	return "../../../assets/images/"+idImage;
  }
}
