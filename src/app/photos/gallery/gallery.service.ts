import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  Response,
  RequestOptions
} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { forEach } from "@angular/router/src/utils/collection";




@Injectable()
export class GalleryService {

  constructor(private http: Http) { }

  private urlGetImages: string = "http://apirusticstock.herokuapp.com/api/v1/products";

  private extractDataJSON(res: Response){
  	/*
  	let body = res.json();
  	return body.data || {};
  	*/
  	return res;
  }

  getImages(){
  	let headers = new Headers({'Content-Type': 'application/json'})
  	let options = new RequestOptions({headers: headers});
  	return this.http.get(this.urlGetImages, options)
  	//.map(this.extractDataJSON)
  	.catch(this.handleError);
  }

  getImage(id: number){
    let headers = new Headers({'Content-Type': 'application/json'})
    let options = new RequestOptions({headers: headers});
    //console.log("path: ", this.urlGetImages+'/'+id );
    return this.http.get(this.urlGetImages+"/" + id, options)
    //.map(this.extractDataJSON)
    .catch(this.handleError);
  }

  private getUrlPutProduct(id: number){
    return "http://apirusticstock.herokuapp.com/api/v1/users/" + id + "/add_to_cart";
  }

  putImagesToCart(idPhoto: number, idUser: number, headers){
    //let headers = new Headers({'Content-Type': 'application/json'})
    let requestHeaders = new Headers();
    requestHeaders.append('Content-Type','application/json');
    requestHeaders.append('access-token',headers[0]);
    requestHeaders.append('client',headers[1]);
    requestHeaders.append('expiry',headers[2]);
    requestHeaders.append('token-type',headers[3]);
    requestHeaders.append('uid',headers[4]);
    //let options = new RequestOptions({headers: requestHeaders})
    var url = this.getUrlPutProduct(idUser);
    console.log("from gallery service url " + url)
    console.log("item " + idPhoto)
    return this.http.put(url,idPhoto, {headers: requestHeaders})
      .catch(this.handleError);
  }


  private handleError( error: any ) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
