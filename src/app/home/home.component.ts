import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {User} from '../types/user'
import {UserService} from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { errorCodes } from '../common/error-map';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    constructor (private userService: UserService,
                 private authenticationService: AuthenticationService,
                 private notifierService: NotifierService){

    };
    isAuth= false;
    user: User;

    ngOnInit() {
        this.updateUserState();
        this.authenticationService.userLoggedIn$.subscribe(
            data => {
                this.updateUserState();
            });

    }

    logout(){
        this.userService.logoutUser()
            .subscribe(
                data => {
                    this.updateUserState();
                    this.notifierService.showSuccess('Bye-bye');
                },
                data => {
                    this.notifierService.showError(data.error.code || 1);
                })
    }

    updateUserState(){
        this.user = this.authenticationService.getCurrentUser();
        this.isAuth = !!this.user;
    }

}
