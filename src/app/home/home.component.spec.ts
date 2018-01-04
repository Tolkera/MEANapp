import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By }  from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { HomeComponent } from './home.component';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';

describe('HomeComponent', () => {
  let comp:    HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let userServiceStub,
      userService;
  let authServiceStub,
      authService;

  beforeEach(async(() => {
    userServiceStub = {};

    authServiceStub = {
      getCurrentUser: function(){return false},
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
        {provide: AuthenticationService, useValue: authServiceStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;

    authService = fixture.debugElement.injector.get(AuthenticationService);
    userService = fixture.debugElement.injector.get(UserService);
    de = fixture.debugElement.query(By.css('.home'));
    el = de.nativeElement;
  }));

  it('should NOT show welcome block if user is NOT logged in', () => {
    fixture.detectChanges();
    expect(el.querySelectorAll('#welcome').length).toBe(0)
  });

  it('should show welcome block if user is logged in', () => {
    authService.getCurrentUser = function(){return  {firstName: "Bubba"}};
    fixture.detectChanges();
    expect(el.querySelectorAll('#welcome').length).toBe(1)
  });

  it('should contain username if the user is logged in', () => {
    authService.getCurrentUser = function(){return {firstName: "Bubba"}};
    fixture.detectChanges();
    let content = el.textContent;
    expect(content).toContain('Bubba')
  });
});
