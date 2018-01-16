import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../types/user';
import { errorCodes } from '../common/error-map';
import { NotifierService } from '../services/notifier.service';
import 'rxjs/add/operator/takeUntil';
import { Subject }    from 'rxjs/Subject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit  {

    constructor(
        private userService: UserService) {}

    private componentDestroyed: Subject<any> = new Subject();
    user = {} as User;
    active = true;

    onSubmit(event) {
        event.stopPropagation();
        event.preventDefault();

    this.userService.loginUser(this.user)
        .takeUntil(this.componentDestroyed)
        .subscribe()
    };

    ngOnInit(){}

    ngOnDestroy() {
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    }
}
