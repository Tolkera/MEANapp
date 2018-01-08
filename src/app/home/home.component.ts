import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {User} from '../types/user'
import {UserService} from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { errorCodes } from '../common/error-map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    constructor (private userService: UserService,
                 private authenticationService: AuthenticationService,
                 private toastr: ToastsManager){

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
                    this.toastr.success('Bye-bye');
                },
            data => {
                data.error.code = data.error.code || 1;
                let message = errorCodes[data.error.code];
                this.toastr.error(message);
            })
    }

    updateUserState(){
        this.user = this.authenticationService.getCurrentUser();
        this.isAuth = !!this.user;
    }

}
