import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

declare var window:any;

@Injectable()

export class AuthenticationService {
  private userAuthenticateSource = new Subject<any>();
  onAuthenticate= this.userAuthenticateSource.asObservable();

  userAuthed() {
    this.userAuthenticateSource.next(this.getCurrentUser());
  };

  getCurrentUser(){
    return window.bootstrappedUserObject;
  }

  setCurrentUser(user){
    window.bootstrappedUserObject = user;
    this.userAuthed();
  };

  isAuthenticated() {
    return !!window.bootstrappedUserObject;
  };
}
