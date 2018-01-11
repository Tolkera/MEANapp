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

    constructor (
        private authenticationService: AuthenticationService){};
    user: User;

    ngOnInit() {
        this.user = this.authenticationService.getCurrentUser();
        
        this.authenticationService.userLoggedIn$.subscribe(
            data => {
                this.user = data;
            });
    }

}
