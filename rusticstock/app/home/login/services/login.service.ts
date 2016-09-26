import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  Response,
  RequestOptions
} from '@angular/http';
import { UserComponent } from '../../../models/user.component';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService{
  constructor(private http: Http){
  }
  status: boolean = false;
  /*Endpoint Rails*/
  private logInUrl = 'http://rusticstock.herokuapp.com/api/v1/auth/sign_in.json';
  private signUpUrl = 'http://rusticstock.herokuapp.com/api/v1/auth';
  private logOutUrl = "http://locanhost:3000/auth/sign_out.json";

  private extractData( res: Response ){
    let body = res.json();
    return body.data || {};
  }
  
  loginUser( body: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.logInUrl, body, options)
    .map(this.extractData)
    .catch(this.handleError);
  }

  logOutUser(){
    
  }

  signUpUser(body: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.signUpUrl,body,options)
    .map(this.extractData)
    .catch(this.handleError);
  }


  private handleError( error: any )
  {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
