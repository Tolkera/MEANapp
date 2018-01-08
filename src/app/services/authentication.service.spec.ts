import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { User } from '../types/user';

describe('AuthenticationService', () => {
    let service: AuthenticationService;
    let user = {} as User;

    beforeEach(() => {
        service = new AuthenticationService();
        user.firstName = 'Bu';
        window.bootstrappedUserObject = null;
    });

    it('should get correct value from window.bootstrappedUserObject object', () => {
        window.bootstrappedUserObject = user;
        expect(service.getCurrentUser()).toEqual(user);
    });

    it('should set correct value to window.bootstrappedUserObject object', () => {
        service.setCurrentUser(user);
        expect(window.bootstrappedUserObject).toEqual({firstName: 'Bu'});
    });


});
