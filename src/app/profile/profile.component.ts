import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../types/user';
import { errorCodes } from '../common/error-map';
import { NotifierService } from '../services/notifier.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})


export class ProfileComponent implements OnInit {

    constructor(private userService: UserService,
                private notifierService: NotifierService,
                private authenticationService: AuthenticationService) { }
    user = {} as User;
    submitted = false;
    active = true;

    onSubmit(event) {
        event.stopPropagation();
        event.preventDefault();
        this.submitted = true;

        if ((this.user.password || this.user.passwordRepeat) && (this.user.password !== this.user.passwordRepeat)){
            return
        }

        this.userService.updateUser(this.user)
            .subscribe(
                res  => {
                    this.notifierService.showSuccess('Your account has been created');
                    this.active = false;
                    this.submitted = false;
                    this.user.password = '';
                    this.user.passwordRepeat = '';
                },
                data => {
                    this.notifierService.showError(data.error.code || 1);
                    this.submitted = false;
                }
            );

    }

    ngOnInit(){

        this.user = this.authenticationService.getCurrentUser();
    }
}
