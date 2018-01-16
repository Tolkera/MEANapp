import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../types/user';
import { errorCodes } from '../common/error-map';
import { NotifierService } from '../services/notifier.service';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent{

  constructor(private userService: UserService) {

  }
    private componentDestroyed: Subject<any> = new Subject();
    user = {} as User;
    submitted = false;
    active = true;

    onSubmit(event) {
        event.stopPropagation();
        event.preventDefault();
        this.submitted = true;

        if (this.user.password == this.user.passwordRepeat) {

          this.userService.addUser(this.user)
              .takeUntil(this.componentDestroyed)
              .subscribe(
                  res  => {},
                  error => {},
                  () => {
                      this.submitted = false;
                      this.active = false;
                      this.user.password = '';
                      this.user.passwordRepeat = '';
                  }
              );
        }
    }

    ngOnDestroy() {
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    }
}
