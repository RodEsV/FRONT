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


@Injectable()
export class LoginService{
  constructor(private http: Http){
  }
  status: boolean = false;
  /*Endpoint Rails*/
  private logInUrl = 'http://apirusticstock.herokuapp.com/api/v1/auth/sign_in.json';
  private signUpUrl = 'http://apirusticstock.herokuapp.com/api/v1/auth';
  private logOutUrl = "http://apirusticstock.herokuapp.com/api/v1/auth/sign_out.json";



  public responseLogIn;

  private extractDataJSON( res: Response ){
    let body = res.json();
    return body.data || {};
  }

  private extractData(res: Response){
    return res;
  }
  
  loginUser( body: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.logInUrl, body, options)
    //.map(this.extractData)
    .catch(this.handleError);
  }

  logOutUser(access_token:any, uid:any, client: any){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json' );
    headers.append('access_token', access_token );
    headers.append('uid',uid);
    headers.append('client',client);
    let options = new RequestOptions({headers:headers});
    return this.http.get(this.logOutUrl, options)
    .catch(this.handleError);
    
  }

  signUpUser(body: string){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post(this.signUpUrl,body,options)
    .map(this.extractDataJSON)
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
