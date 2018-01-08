import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../types/user';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { errorCodes } from '../common/error-map';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

  constructor(private userService: UserService,
              private notifierService: NotifierService,
              public toastr: ToastsManager) { }
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
