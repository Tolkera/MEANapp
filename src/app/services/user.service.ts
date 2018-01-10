import { Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import 'rxjs/add/observable/throw';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) {}


  addUser (user){
    const userUrl = '/api/users';

    return this.http.post(userUrl, user, httpOptions).pipe(
        tap((res) => {
          this.authenticationService.setCurrentUser(res);
        }),
        catchError(this.handleError)
    );
  };

  updateUser (user){
    const userUrl = '/api/users';

    return this.http.put(userUrl, user, httpOptions).pipe(
        tap((res) => {
          this.authenticationService.setCurrentUser(res);
        }),
        catchError(this.handleError)
    );
  };

  logoutUser(){
    const userUrl = '/logout';
    return this.http.get(userUrl, httpOptions).pipe(
        tap((res) => {this.authenticationService.setCurrentUser(null)}),
        catchError(this.handleError)
    );
  };

  loginUser(user){
    const userUrl = '/api/login';
    return this.http.post(userUrl, user, httpOptions).pipe(
        tap((res) => {
          this.authenticationService.setCurrentUser(res);
        }),
        catchError(this.handleError)
    );
  }

  handleError (error: Response | any) {

    return Observable.throw(error);
  }

}
