import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {User} from '../types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  user = {} as User;
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

  active = true;

  ngOnInit() {
  }

}
