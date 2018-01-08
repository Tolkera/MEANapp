import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../types/user';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { errorCodes } from '../common/error-map';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit  {

  constructor(private userService: UserService,
              public toastr: ToastsManager,
              private notifierService: NotifierService) {
 }
  @ViewChild('regForm') form;
  user = {} as User;
  active = true;
  onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();

    this.userService.loginUser(this.user)
        .subscribe(
            res  => {
              this.notifierService.showSuccess('You are in');
            },
            data => {
                this.notifierService.showError(data.error.code);
            }
        )
  };
  ngOnInit(){}
}
