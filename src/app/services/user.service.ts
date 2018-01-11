import { Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import 'rxjs/add/observable/throw';
import { NotifierService } from './notifier.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {
 // self: any;

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService,
              private  notifierService: NotifierService) {
  //  self = this;
  }



  addUser (user){
    const userUrl = '/api/users';

    return this.http.post(userUrl, user, httpOptions).pipe(
        tap((res) => {
          this.authenticationService.setCurrentUser(res);
          this.notifierService.showSuccess('Your account has been created');
        }),
        catchError(this.handleError.bind(this))
    );
  };

  updateUser (user){
    const userUrl = '/api/users';

    return this.http.put(userUrl, user, httpOptions).pipe(
        tap((res) => {
          this.authenticationService.setCurrentUser(res);
          this.notifierService.showSuccess('Your account has been updated');
        }),
        catchError(this.handleError.bind(this))
    );
  };

  logoutUser(){
    const userUrl = '/logout';
    return this.http.get(userUrl, httpOptions).pipe(
        tap((res) => {
          this.authenticationService.setCurrentUser(null);
          this.notifierService.showSuccess('Bye-bye');
        }),
        catchError(this.handleError.bind(this))
    );
  };

  loginUser(user){
    const userUrl = '/api/login';
    return this.http.post(userUrl, user, httpOptions).pipe(
        tap((res) => {
          this.authenticationService.setCurrentUser(res);
          this.notifierService.showSuccess('You are in!');
        }),
        catchError(this.handleError.bind(this))
    );
  }

  handleError (error: Response | any) {
    this.notifierService.showError(error.error ? error.error.code : 1);
    return Observable.throw(error);
  }

}

