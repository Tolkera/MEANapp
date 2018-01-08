import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By }  from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { User } from '../types/user'

describe('RegistrationComponent', () => {
  let comp:    RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let submitBtn: HTMLElement;
  let userServiceStub,
      userService;
  let authServiceStub,
      authService;
  let user: User;

  beforeEach(async(() => {

    userServiceStub = {
      addUser: function(user){}
    };

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        RegistrationComponent
      ],
      providers: [
        {provide: UserService, useValue: userServiceStub },
        {provide: AuthenticationService, useValue: authServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    comp = fixture.componentInstance;

    authService = fixture.debugElement.injector.get(AuthenticationService);
    userService = fixture.debugElement.injector.get(UserService);
    de = fixture.debugElement.query(By.css('#register'));
    el = de.nativeElement;
    submitBtn = el.querySelector('button[type="submit"]') as HTMLElement;

    user = {
      username: 'bubba',
      firstName: 'Bubba',
      password: '123',
      passwordRepeat: '123'
    };

  }));

  it('should call registrer method with user data when the form is complete', () => {
    spyOn(userService, 'addUser');
    comp.user = user;

    fixture.detectChanges();
    submitBtn.click();

    expect(userService.addUser).toHaveBeenCalledWith(user)
  });

  it('should not call registrer method when the passwords do not match', () => {
    spyOn(userService, 'addUser');
    user.password = '12';
    comp.user = user;

    fixture.detectChanges();
    submitBtn.click();

    expect(userService.addUser).not.toHaveBeenCalled()
  });
});
