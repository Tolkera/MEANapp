import { Injectable }     from '@angular/core';
import { CanActivate,  Router }    from '@angular/router';
import {AuthenticationService} from './authentication.service'

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private authenticationService:AuthenticationService,
        private router: Router) {
    }

    canActivate() {

        let isLoggedIn = this.authenticationService.isAuthenticated();

        if (!isLoggedIn){
            this.router.navigate(['/']);}

        return isLoggedIn;
    }
}