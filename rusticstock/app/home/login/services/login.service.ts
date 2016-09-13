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
  status: string = "";
  /*Endpoint Rails*/
  private userUrl = 'http://rusticstock.herokuapp.com/api/v1/auth/sign_in.json';
  private signUpUrl = 'http://rusticstock.herokuapp.com/api/v1/auth';

  private extractData( res: Response ){
    let body = res.json();
    if (res.status >= 200 || res.status < 300) {
      this.status = "up";
    }
    else {
      this.status = "down";
      return body.data || {};
    }

  }

  loginUser(email: string, password: string): Observable<UserComponent>{
    let body = JSON.stringify({email, password});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers});

    return this.http.post(this.userUrl, body, options)
    .map(this.extractData)
    .catch(this.handleError);
  }


  signUpUser(name:string, nickname: string, email: string, password: string, password_confirmation: string, confirm_success_url: string): Observable<UserComponent> {
    //let body = JSON.stringify({ name, nickname, email, password, password_confirmation});
    let body = JSON.stringify({email, name, password});
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    console.log(body);
    return this.http.post(this.signUpUrl, body, options )
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
