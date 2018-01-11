import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By }  from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { HomeComponent } from './home.component';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { NotifierService } from '../services/notifier.service';
import { Observable } from 'rxjs';

describe('HomeComponent', () => {
  let comp:    HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let userServiceStub,
      userService;
  let authServiceStub,
      authService;
  let notifierServiceStub,
      notifierService;

  beforeEach(async(() => {
    userServiceStub = {
      logoutUser: function(){
        return Observable.of(false);
      }
    };

    notifierServiceStub = {
      showSuccess: function(){},
      showError: function(){}
    };

    authServiceStub = {
      getCurrentUser: function(){return  {firstName: "Bubba"}},
      userLoggedIn$: {
        subscribe: function(){return {}}
      }
    };

    TestBed.configureTestingModule({
      declarations: [
        HomeComponent
      ],
      providers: [
        {provide: UserService, useValue: userServiceStub },
        {provide: AuthenticationService, useValue: authServiceStub },
        {provide: NotifierService, useValue: notifierServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;

    authService = fixture.debugElement.injector.get(AuthenticationService);
    userService = fixture.debugElement.injector.get(UserService);
    notifierService = fixture.debugElement.injector.get(NotifierService);
    de = fixture.debugElement.query(By.css('.home'));
    el = de.nativeElement;
  }));

  //it('should NOT show welcome block if user is NOT logged in', () => {
  //  authService.getCurrentUser = function(){return false};
  //  fixture.detectChanges();
  //  expect(el.querySelectorAll('#welcome').length).toBe(0)
  //});

  //it('should show welcome block if user is logged in', () => {
  //  fixture.detectChanges();
  //  expect(el.querySelectorAll('#welcome').length).toBe(1)
  //});

  //it('should contain username if the user is logged in', () => {
  //  fixture.detectChanges();
  //  let content = el.textContent;
  //  expect(content).toContain('Bubba')
  //});


  //it('should call logout when user click on logout button', () => {
  //  spyOn(userService, 'logoutUser');
  //  fixture.detectChanges();
  //  let button = el.querySelector('#logout') as HTMLElement;
  //  button.click();
  //  fixture.detectChanges();
  //  expect(userService.logoutUser).toHaveBeenCalled()
  //});

  //it('should logout the user when logout() method is called', () => {
  //  fixture.detectChanges();
  //  authService.getCurrentUser = function(){return false};
  //  spyOn(userService, 'logoutUser').and.callThrough();
  //  comp.logout();
  //  expect(comp.isAuth).toEqual(false)
  //});
});
