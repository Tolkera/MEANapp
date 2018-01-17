import { async, ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By }  from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { NotifierService } from './services/notifier.service';
import { Observable } from 'rxjs';

describe('AppComponent', () => {
    let comp:    AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let de:      DebugElement;
    let el:      HTMLElement;
    let userServiceStub,
        userService;
    let authServiceStub,
        authService;
    let notifierServiceStub,
        notifierService,
    toastsManagerStub;
    let user;

    beforeEach(async(() => {

         user = {firstName: "Bubba"};

        userServiceStub = {
            logoutUser: function(){}
        };

        notifierServiceStub = {
            showSuccess: function(){},
            showError: function(){}
        };
        toastsManagerStub = {
            setRootViewContainerRef: function(){}
        };

        authServiceStub = {
            getCurrentUser: function(){return  user},
            onAuthenticate: {
                takeUntil: function(){
                    return Observable.of(user)
                },
            }
        };

        TestBed.configureTestingModule({
                declarations: [
                    AppComponent
                ],
                providers: [
                   {provide:  ToastsManager, useValue: toastsManagerStub },
                    {provide: UserService, useValue: userServiceStub },
                    {provide: AuthenticationService, useValue: authServiceStub },
                    {provide: NotifierService, useValue: notifierServiceStub }
                ],
                schemas: [ NO_ERRORS_SCHEMA ]
            })
            .compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        comp = fixture.componentInstance;

        authService = fixture.debugElement.injector.get(AuthenticationService);
        userService = fixture.debugElement.injector.get(UserService);
        notifierService = fixture.debugElement.injector.get(NotifierService);
        de = fixture.debugElement.query(By.css('#wrap'));
        el = de.nativeElement;
    }));

    it('should NOT show welcome block if user is NOT logged in', () => {
        user = null;
        fixture.detectChanges();
        expect(el.textContent).not.toContain('Welcome');
    });

    it('should show welcome block if user is logged in', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain('Welcome');
    });

    it('should contain username if the user is logged in', () => {
        fixture.detectChanges();
        let content = el.textContent;
        expect(content).toContain('Bubba')
    });

    it('should call logout when user click on logout button', () => {
        spyOn(userService, 'logoutUser');
        fixture.detectChanges();
        let button = el.querySelector('#logout') as HTMLElement;
        button.click();
        fixture.detectChanges();
        expect(userService.logoutUser).toHaveBeenCalled()
    });

    it('should logout the user when logout() method is called', fakeAsync(() => {
        user = null;
        spyOn(userService, 'logoutUser').and.returnValue(Observable.of(user));
        comp.logout();
        fixture.detectChanges();
        expect(comp.user).toBeFalsy();
    }));
});
