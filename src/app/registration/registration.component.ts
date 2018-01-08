import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../types/user';
//import {NotifierService} from '../services/notifier.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService) { }
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
                    if (!res.success){
                     // this.notifierService.error('Please check the credentials!');
                    } else {
                    //  this.notifierService.notify('Welcome!');
                      this.active = false;
                    }
                    this.submitted = false;
                  },
                  error =>  {
                    //this.notifierService.notify(error);
                    this.submitted = false;
                  }
              );
        }
    }


  ngOnInit() {
  }

}
