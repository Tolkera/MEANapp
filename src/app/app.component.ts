import { Component,ViewContainerRef, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthenticationService } from './services/authentication.service';
import { User } from './types/user';
import { UserService } from './services/user.service';
import { NotifierService } from './services/notifier.service';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor (public toastr: ToastsManager,
               public vcr: ViewContainerRef,
               private authenticationService: AuthenticationService,
                private userService: UserService) {

    this.toastr.setRootViewContainerRef(vcr);
  };

  private componentDestroyed: Subject<any> = new Subject();

  user = null as User;

  ngOnInit(){
    this.user = this.authenticationService.getCurrentUser();

    this.authenticationService.onAuthenticate
        .takeUntil(this.componentDestroyed)
        .subscribe(
        data => {

          this.user = data;
        });
  }

  logout(){
    this.userService.logoutUser()
        .subscribe();
  }

  ngOnDestroy() {
    this.componentDestroyed.next();
    this.componentDestroyed.complete();
  }
}
