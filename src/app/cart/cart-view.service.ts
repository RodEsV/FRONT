import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

@Injectable()
export class CartViewService {

  constructor(private http: Http) { }

  urlCart: string = "http://apirusticstock.herokuapp.com/api/v1/users/";
  getCart(id: number, headers){
    let requestHeaders = new Headers();
    requestHeaders.append('Content-Type','application/json');
    requestHeaders.append('access-token',headers[0]);
    requestHeaders.append('client',headers[1]);
    requestHeaders.append('expiry',headers[2]);
    requestHeaders.append('token-type',headers[3]);
    requestHeaders.append('uid',headers[4]);
    return this.http.get(this.urlCart+id+"/cart", {headers: requestHeaders})
  }
}
