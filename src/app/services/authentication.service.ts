import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

declare var window:any;

@Injectable()

export class AuthenticationService {
  private userLoggedInSource = new Subject<boolean>();
  userLoggedIn$= this.userLoggedInSource.asObservable();

  userAuthed() {
    this.userLoggedInSource.next();
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
