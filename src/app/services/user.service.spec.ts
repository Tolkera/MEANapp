//import { TestBed, inject, async, getTestBed } from '@angular/core/testing';
//import { UserService } from './user.service';
//import { AuthenticationService } from './authentication.service';
//import { User } from '../types/user';
//import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
//import {
//    HttpModule,
//    Http,
//    Response,
//    ResponseOptions,
//    XHRBackend,
//
//} from '@angular/http';
//import { MockBackend } from '@angular/http/testing';
//
//describe('VideoService', () => {
//    let authServiceStub,
//        authService;
//    let user: User;
//
//    beforeEach(() => {
//
//        authServiceStub = {
//            isAuthenticated: function(user){return true}
//        };
//
//        TestBed.configureTestingModule({
//            imports: [HttpModule],
//            providers: [
//                UserService,
//                {provide: HttpClient, deps: [MockBackend]},
//                {provide: AuthenticationService, useValue: authServiceStub },
//                { provide: XHRBackend, useClass: MockBackend },
//            ]
//        });
//    });
//
//    describe('User', () => {
//
//        it('should return an Observable',
//            inject([UserService, XHRBackend], (userService, mockBackend) => {
//
//                const mockResponse = {
//                    name: 'Frou-Frou'
//                };
//
//                console.log(mockBackend);
//                mockBackend.connections.subscribe((connection) => {
//                    connection.mockRespond(new Response(new ResponseOptions({
//                        body: JSON.stringify(mockResponse)
//                    })));
//                });
//
//                userService.addUser().subscribe((res) => {
//                    expect(res.length).toBe(4);
//                });
//
//            }));
//    });
//});