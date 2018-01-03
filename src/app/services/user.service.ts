import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  addUser (user): Observable<any>{
    const userUrl = '/api/users';

    return this.http.post(userUrl, user, httpOptions).pipe(
        tap((res) => {console.log(res)}),
        catchError(this.handleError)
    );
  };


  private extractData(res) {
    let body = JSON.parse(res._body);
    let user;
    if (body.user) {
      user = {_id: body.user._id, username: body.user.username, firstName: body.user.firstName};
    }
 //   this.authenticationService.setCurrentUser(user);

    return body || { };
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

  private log(message: string) {
    console.log('added')
  }
}
