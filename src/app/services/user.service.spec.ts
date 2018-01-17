import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { AuthenticationService } from './authentication.service';
import { NotifierService } from './notifier.service';
import { Router } from '@angular/router';

let notifierServiceStub = {
    showSuccess: function(){},
    showError: function(){}
};
describe(`User Service`, () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                HttpClientTestingModule
            ],
            providers: [
                {  provide: Router, useValue: class {
                        navigate = jasmine.createSpy("navigate")
                    } },
                UserService,
                AuthenticationService,
                {provide: NotifierService, useValue: notifierServiceStub }
            ]
        });
    });

    afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
        backend.verify();
    }));


    it(`should pass the new user to auth service after registration`, async(inject([UserService, HttpTestingController, AuthenticationService],
        (service: UserService, backend: HttpTestingController, authService: AuthenticationService) => {
            spyOn(authService, 'setCurrentUser');
            let newUser = {username: '1'};
            service.addUser(newUser).subscribe((next) => {
                expect(next).toEqual(newUser);
                expect(authService.setCurrentUser).toHaveBeenCalledWith(newUser);
            });

            backend.expectOne('/api/users').flush(newUser, { status: 200, statusText: 'Ok' });
        })));
});