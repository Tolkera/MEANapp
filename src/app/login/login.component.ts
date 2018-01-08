import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }
  @ViewChild('regForm') form;
  user = {} as User;
  active = true;
  onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();

    this.userService.loginUser(this.user)
        .subscribe(
            res  => {

            },
            error => {

            }
        )
  };

  ngOnInit() {};
}
