import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }


  addUser (user): Observable<any>{
    const userUrl = '/api/users';

    return this.http.post(userUrl, user, httpOptions).pipe(
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

  private handleError (error: Response | any) {
    var err = "";

    if (error._body) {
      const body = JSON.parse(error._body);
      err = body.reason || JSON.stringify(body.reason);
    } else {
      err = 'Unexpected error'
    }

    return Observable.throw(err);
  }
}

