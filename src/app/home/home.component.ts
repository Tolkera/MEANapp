import { Component, OnInit } from '@angular/core';
import {User} from '../types/user'
import {UserService} from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    constructor (private userService: UserService,
               private authenticationService: AuthenticationService) {
    };
    isAuth= false;
    user: User;

    ngOnInit() {
        this.updateUserState();
        this.authenticationService.userLoggedIn$.subscribe(
            data => {
                this.updateUserState()
            });
    }

    logout(){
        this.userService.logoutUser()
            .subscribe(
                data => {
                    this.updateUserState();
                })
    }

    updateUserState(){
        this.user = this.authenticationService.getCurrentUser();
        this.isAuth = !!this.user;
    }
}
