import { Component, OnInit, ViewChild } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../types/user';
import { errorCodes } from '../common/error-map';
import { NotifierService } from '../services/notifier.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{

  constructor(private userService: UserService,
              private notifierService: NotifierService) {

  }
    user = {} as User;
    submitted = false;
    active = true;

    onSubmit(event) {
        event.stopPropagation();
        event.preventDefault();
        this.submitted = true;

        if (this.user.password == this.user.passwordRepeat) {

          this.userService.addUser(this.user)
              .subscribe(
                  res  => {
                      this.notifierService.showSuccess('Your account has been created');
                      this.user.password = '';
                      this.user.passwordRepeat = '';
                      this.active = false;
                      this.submitted = false;

                  },
                  data => {
                      this.notifierService.showError(data.error.code || 1);
                      this.submitted = false;
                  }
              );
        }
    }
}
