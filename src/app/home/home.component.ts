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
    isAuth = this.authenticationService.isAuthenticated();
    user: User = this.authenticationService.getCurrentUser();

    ngOnInit() {
        this.isAuth = this.authenticationService.getCurrentUser();
        this.authenticationService.userLoggedIn$.subscribe(
            data => {
                this.user = this.authenticationService.getCurrentUser();
                console.log(this.user);
                this.isAuth = this.authenticationService.isAuthenticated();
            });
    }

    logout(){
        this.userService.logoutUser()
            .subscribe();
    }

}
