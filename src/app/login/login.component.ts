import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../types/user';
import { errorCodes } from '../common/error-map';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit  {

  constructor(private userService: UserService,
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
