import { Component, OnInit } from '@angular/core';

import {UserService} from '../services/user.service';
//import {NotifierService} from '../services/notifier.service'
//import { RouterModule, Router,  ActivatedRoute}   from '@angular/router';
//import { regFormTemplate } from './registration-form.html';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService) { }

  model = {
    username: '',
    firstName: '',
    password: '',
    passwordRepeat: ''
  };

  submitted = false;
  onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    this.submitted = true;

    if (this.model.password == this.model.passwordRepeat) {

      this.userService.addUser(this.model)
          .subscribe(
              res  => {
                console.log(res);
                //if (!res.success){
                //  this.notifierService.error('Please check the credentials!');
                //} else {
                //  this.notifierService.notify('Welcome!');
                //  this.active = false;
                //}
                //this.submitted = false;
                //this.router.navigate([''])
              },
              error =>  {
                //this.notifierService.notify(error);
                this.submitted = false;
              }
          );
    }
  }
  active = true;

  ngOnInit() {
  }

}
