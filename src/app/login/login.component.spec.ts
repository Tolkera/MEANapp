import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By }  from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login.component';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { NotifierService } from '../services/notifier.service';
import { User } from '../types/user';

describe('LoginComponent', () => {
  let comp:    LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let submitBtn: HTMLElement;
  let userServiceStub,
      userService;
  let authServiceStub,
      authService;
  let notifierServiceStub,
      notifierService;
  let user: User;

  beforeEach(async(() => {

    userServiceStub = {
      loginUser: function(user){
        return true;
      }
    };

    notifierServiceStub = {
      showSuccess: function(){},
      showError: function(){}
    };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        LoginComponent
      ],
      providers: [
        {provide: UserService, useValue: userServiceStub },
        {provide: AuthenticationService, useValue: authServiceStub },
        {provide: NotifierService, useValue: notifierServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;

    authService = fixture.debugElement.injector.get(AuthenticationService);
    userService = fixture.debugElement.injector.get(UserService);
    notifierService = fixture.debugElement.injector.get(NotifierService);
    de = fixture.debugElement.query(By.css('#login'));
    el = de.nativeElement;
    submitBtn = el.querySelector('button[type="submit"]') as HTMLElement;
  }));

  it('should not call login unless the form is complete', () => {

    spyOn(comp, 'onSubmit');
    fixture.detectChanges();
    submitBtn.click();

    expect(comp.onSubmit).not.toHaveBeenCalled();
  });

  it('should call login method with user data when the form is complete', () => {
    spyOn(userService, 'loginUser');
    comp.user.username = 'Bubba';
    comp.user.password = 'bu';

    fixture.detectChanges();
    submitBtn.click();
    expect(userService.loginUser).toHaveBeenCalledWith({username: 'Bubba', password: 'bu'})
  });
});
