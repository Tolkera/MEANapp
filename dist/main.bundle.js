webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var not_found_component_1 = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
var tasks_component_1 = __webpack_require__("../../../../../src/app/tasks/tasks.component.ts");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var appRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'register',
        component: registration_component_1.RegistrationComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        canActivate: [auth_guard_service_1.AuthGuardService],
        path: 'tasks',
        component: tasks_component_1.TasksComponent
    },
    { path: '', component: home_component_1.HomeComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, {})
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\"  id=\"wrap\">\n\n  <div class=\"app-header\">\n    <div class=\"app-container\">\n    <nav class=\"\">\n      <div class=\"app-grid\">\n        <div class=\"app-grid__item app-grid__item--1-4\">\n          <a routerLink=\"/\" class=\"app-header__name\">\n            Angular 5 App\n          </a>\n\n        </div>\n\n        <div class=\"app-grid__item app-grid__item--1-2\" *ngIf=\"!!user\">\n          <ul class=\"\">\n            <li class=\"app-nav-item\">\n              <a class=\"app-nav-link\" routerLinkActive=\"app-nav-link--active\" routerLink=\"\" [routerLinkActiveOptions]=\"{ exact: true }\">Profile</a>\n            </li>\n            <li class=\"app-nav-item\">\n              <a class=\"app-nav-link\" routerLinkActive=\"app-nav-link--active\" routerLink=\"/tasks\" [routerLinkActiveOptions]=\"{ exact: true }\">Tasks</a>\n            </li>\n          </ul>\n        </div>\n\n        <div class=\"app-grid__item app-grid__item--1-4\"  *ngIf=\"!!user\">\n          <div class=\"app-header__user\">Welcome, {{user.firstName}}\n            <button id=\"logout\" class=\"app-header__logout-btn app-btn app-btn--neutral\" (click)=\"logout()\">Logout</button>\n          </div>\n        </div>\n      </div>\n    </nav>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n  <div class=\"app-container\">\n\n  <div class=\"app-dimmed app-border app-about  app-margin--xxl\">\n\n    <img src=\"/assets/img/bosch--s.png\" class=\"app-logo\" alt=\"\"/>\n\n      This is a simple Angular 5 / NodeJS / MongoDB app with basic functionality:\n      <br>\n      <br>\n      1. Registering, logging in and logging out <br>\n      2. Editing your profile after registration <br>\n      3. Creating categories of items, deleting them and updating them <br>\n      4. Routing (restricted for logged in, 404)\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
var AppComponent = (function () {
    function AppComponent(toastr, vcr, authenticationService, userService) {
        this.toastr = toastr;
        this.vcr = vcr;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.componentDestroyed = new Subject_1.Subject();
        this.user = null;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authenticationService.getCurrentUser();
        this.authenticationService.onAuthenticate
            .takeUntil(this.componentDestroyed)
            .subscribe(function (data) {
            _this.user = data;
        });
    };
    AppComponent.prototype.logout = function () {
        this.userService.logoutUser()
            .subscribe();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [ng2_toastr_1.ToastsManager,
            core_1.ViewContainerRef,
            authentication_service_1.AuthenticationService,
            user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
var profile_component_1 = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var not_found_component_1 = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
var tasks_component_1 = __webpack_require__("../../../../../src/app/tasks/tasks.component.ts");
var notifier_service_1 = __webpack_require__("../../../../../src/app/services/notifier.service.ts");
var task_service_1 = __webpack_require__("../../../../../src/app/services/task.service.ts");
var category_service_1 = __webpack_require__("../../../../../src/app/services/category.service.ts");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                registration_component_1.RegistrationComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                profile_component_1.ProfileComponent,
                not_found_component_1.NotFoundComponent,
                tasks_component_1.TasksComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                ng2_toastr_1.ToastModule.forRoot()
            ],
            providers: [
                user_service_1.UserService,
                authentication_service_1.AuthenticationService,
                notifier_service_1.NotifierService,
                task_service_1.TasksService,
                category_service_1.CategoryService,
                auth_guard_service_1.AuthGuardService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/common/error-map.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCodes = {
    1: 'The server seems to be misbehaving. Need to debug!',
    101: 'Username is taken',
    102: 'Passwords do not match',
    103: 'Incorrect username or password',
    105: 'A task should have a name',
    106: 'A category should have a name',
};


/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-home app-container \">\n  <div *ngIf=\"!user\">\n\n    <div class=\"app-grid\">\n      <div class=\"app-grid__item app-grid__item--1-2\">\n        <app-login></app-login>\n      </div>\n      <div class=\"app-grid__item app-grid__item--1-2\">\n        <app-registration></app-registration>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"!!user\" >\n      <app-profile></app-profile>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
var HomeComponent = (function () {
    function HomeComponent(authenticationService) {
        this.authenticationService = authenticationService;
        this.componentDestroyed = new Subject_1.Subject();
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authenticationService.getCurrentUser();
        this.authenticationService.onAuthenticate.takeUntil(this.componentDestroyed).subscribe(function (data) {
            _this.user = data;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"login\">\n  <h2 class=\"app-heading--secondary\">Login</h2>\n  <form (ngSubmit)=\"onSubmit($event);\" #regForm=\"ngForm\" class=\"app-margin--l\">\n    <div class=\"\">\n      <label for=\"name\">Username</label>\n      <input type=\"text\" class=\"app-form-control app-margin--xs\" id=\"name\"\n             required\n             [(ngModel)]=\"user.username\" name=\"name\"\n             #name=\"ngModel\" >\n      <div [hidden]=\"name.valid || name.pristine\"\n           class=\"app-alert app-margin--xxs\">\n        Name is required\n      </div>\n    </div>\n    <div class=\"app-margin--s\">\n      <label for=\"pass\">Password</label>\n      <input type=\"password\" class=\"app-form-control app-margin--xs\"  id=\"pass\"   required\n             [(ngModel)]=\"user.password\" #password=\"ngModel\" name=\"password\" >\n    </div>\n    <div [hidden]=\"password.valid || password.pristine\"\n         class=\"app-alert app-margin--xxs\">\n      Password is required\n    </div>\n    <button type=\"submit\" class=\"app-btn app-btn--attention app-margin--m\" [disabled]=\"!user.username || !user.password\">Submit</button>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.componentDestroyed = new Subject_1.Subject();
        this.user = {};
        this.active = true;
    }
    LoginComponent.prototype.onSubmit = function (event) {
        event.stopPropagation();
        event.preventDefault();
        this.userService.loginUser(this.user)
            .takeUntil(this.componentDestroyed)
            .subscribe();
    };
    ;
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"app-not-found\">\n\n    <div class=\"app-container\">\n      <div>\n        <h1 class=\"app-heading--primary\"> 404</h1>\n      </div>\n      <div class=\"app-not-found__nav\">\n          <a class=\"app-link\"  routerLink=\"/\">Home</a>\n\n      </div>\n    </div>\n\n\n    <div class=\"app-not-found__parallax-wrap\">\n      <div class=\"app-not-found__parallax js-parallax\">\n        <img src=\"assets\\img\\bosch.png\">\n      </div>\n    </div>\n\n  </div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
        var parallaxElem = Array.from(document.querySelectorAll('.js-parallax'));
        var settings = {
            method: 'mouse',
            mouseSpeed: 30
        };
        window.onmousemove = function (e) {
            var pageX = e.pageX;
            var pageY = e.pageY;
            parallaxElem.forEach(function (elem) {
                elem.style.left = pageX / settings.mouseSpeed + 'px';
                elem.style.top = pageY / (settings.mouseSpeed) + 'px';
            });
        };
    };
    NotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html")
        })
    ], NotFoundComponent);
    return NotFoundComponent;
}());
exports.NotFoundComponent = NotFoundComponent;


/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"profile\" >\n    <div class=\"app-grid\">\n        <div class=\"app-grid__item\">\n            <h1 class=\"app-heading--secondary\">Your profile</h1>\n            <form  (ngSubmit)=\"onSubmit($event);\" #regForm=\"ngForm\" class=\"app-margin--l\">\n                <div class=\"app-margin--m\">\n                    Username: {{user.username}}\n                </div>\n                <div class=\"app-margin--m\">\n                    <label for=\"firstName\">First Name</label>\n                    <input type=\"text\" class=\"app-form-control app-margin--xs\" id=\"firstName\"\n                           required\n                           [(ngModel)]=\"user.firstName\" name=\"firstName\"\n                           #firstName=\"ngModel\" >\n                    <div [hidden]=\"firstName.valid || firstName.pristine\"\n                         class=\"app-alert app-margin--xxs \">\n                        First name is required\n                    </div>\n                </div>\n                <div class=\"app-margin--s\">\n                    <label for=\"alterEgo\">Password</label>\n                    <input type=\"password\" class=\"app-form-control app-margin--xs\"  id=\"alterEgo\"\n                           [(ngModel)]=\"user.password\" #password=\"ngModel\" name=\"password\" >\n                </div>\n                <div class=\"app-margin--m\">\n                    <label for=\"alterEgo\">Password repeat</label>\n                    <input type=\"password\" class=\"app-form-control app-margin--xs\" id=\"passwordRepeat\"\n                           [(ngModel)]=\"user.passwordRepeat\" #passwordRepeat=\"ngModel\" name=\"passwordRepeat\" >\n                </div>\n                <div [hidden]=\"!submitted\" class=\"app-margin--xxs\">\n                    <div class=\"app-alert\" [hidden]=\"user.password == user.passwordRepeat \">\n                        Passwords are not the same!\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"app-btn app-btn--attention app-margin--m\" [disabled]=\"!regForm.form.valid\">Submit</button>\n            </form>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
var ProfileComponent = (function () {
    function ProfileComponent(userService, authenticationService) {
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.componentDestroyed = new Subject_1.Subject();
        this.user = {};
        this.submitted = false;
        this.active = true;
    }
    ProfileComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        this.submitted = true;
        if ((this.user.password || this.user.passwordRepeat) && (this.user.password !== this.user.passwordRepeat)) {
            return;
        }
        this.userService.updateUser(this.user)
            .takeUntil(this.componentDestroyed)
            .subscribe(function (res) { }, function (error) { }, function () {
            _this.submitted = false;
            _this.active = false;
            _this.user.password = '';
            _this.user.passwordRepeat = '';
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = this.authenticationService.getCurrentUser();
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            authentication_service_1.AuthenticationService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" >\n    <h2 class=\"app-heading--secondary\">Register</h2>\n    <form  (ngSubmit)=\"onSubmit($event);\" #regForm=\"ngForm\" class=\"app-margin--l\">\n        <div class=\"\">\n            <label for=\"username\">Name</label>\n            <input type=\"text\" class=\"app-form-control app-margin--xs\" id=\"username\"\n                   required\n                   [(ngModel)]=\"user.username\" name=\"username\"\n                   #username=\"ngModel\" >\n            <div [hidden]=\"username.valid || username.pristine\"\n                 class=\"app-alert app-margin--xxs\">\n                Username is required\n            </div>\n        </div>\n        <div class=\"app-margin--s\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"app-form-control app-margin--xs\" id=\"firstName\"\n                   required\n                   [(ngModel)]=\"user.firstName\" name=\"firstName\"\n                   #firstName=\"ngModel\" >\n            <div [hidden]=\"firstName.valid || firstName.pristine\"\n                 class=\"app-alert app-margin--xxs\">\n                First name is required\n            </div>\n        </div>\n        <div class=\"app-margin--s\">\n            <label for=\"alterEgo\">Password</label>\n            <input type=\"password\" class=\"app-form-control app-margin--xs\"  id=\"alterEgo\"   required\n                   [(ngModel)]=\"user.password\" #password=\"ngModel\" name=\"password\" >\n        </div>\n        <div class=\"app-margin--s\">\n            <label for=\"alterEgo\">Repeat the password </label>\n            <input type=\"password\" class=\"app-form-control app-margin--xs\" id=\"passwordRepeat\" required\n                   [(ngModel)]=\"user.passwordRepeat\" #passwordRepeat=\"ngModel\" name=\"passwordRepeat\" >\n        </div>\n        <div [hidden]=\"!submitted\">\n            <div class=\"app-alert app-margin--xxs\" [hidden]=\"user.password == user.passwordRepeat \">\n                Passwords are not the same!\n            </div>\n        </div>\n        <button type=\"submit\" class=\"app-btn app-btn--attention app-margin--m\" [disabled]=\"!regForm.form.valid\">Submit</button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user.service.ts");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
var RegistrationComponent = (function () {
    function RegistrationComponent(userService) {
        this.userService = userService;
        this.componentDestroyed = new Subject_1.Subject();
        this.user = {};
        this.submitted = false;
        this.active = true;
    }
    RegistrationComponent.prototype.onSubmit = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        this.submitted = true;
        if (this.user.password == this.user.passwordRepeat) {
            this.userService.addUser(this.user)
                .takeUntil(this.componentDestroyed)
                .subscribe(function (res) { }, function (error) { }, function () {
                _this.submitted = false;
                _this.active = false;
                _this.user.password = '';
                _this.user.passwordRepeat = '';
            });
        }
    };
    RegistrationComponent.prototype.ngOnDestroy = function () {
        this.componentDestroyed.next();
        this.componentDestroyed.complete();
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html")
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;


/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var AuthGuardService = (function () {
    function AuthGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var isLoggedIn = this.authenticationService.isAuthenticated();
        if (!isLoggedIn) {
            this.router.navigate(['/']);
        }
        return isLoggedIn;
    };
    AuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            router_1.Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
exports.AuthGuardService = AuthGuardService;


/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var AuthenticationService = (function () {
    function AuthenticationService() {
        this.userAuthenticateSource = new Subject_1.Subject();
        this.onAuthenticate = this.userAuthenticateSource.asObservable();
    }
    AuthenticationService.prototype.userAuthed = function () {
        this.userAuthenticateSource.next(this.getCurrentUser());
    };
    ;
    AuthenticationService.prototype.getCurrentUser = function () {
        return window.bootstrappedUserObject;
    };
    AuthenticationService.prototype.setCurrentUser = function (user) {
        window.bootstrappedUserObject = user;
        this.userAuthed();
    };
    ;
    AuthenticationService.prototype.isAuthenticated = function () {
        return !!window.bootstrappedUserObject;
    };
    ;
    AuthenticationService = __decorate([
        core_1.Injectable()
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ "../../../../../src/app/services/category.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var notifier_service_1 = __webpack_require__("../../../../../src/app/services/notifier.service.ts");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var CategoryService = (function () {
    function CategoryService(http, authenticationService, notifierService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.notifierService = notifierService;
    }
    CategoryService.prototype.getCategories = function (id) {
        var url = '/api/categories';
        return this.http.get(url, httpOptions).pipe(operators_1.tap(function (res) { }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    CategoryService.prototype.addCategory = function (data) {
        var _this = this;
        var url = '/api/categories';
        return this.http.post(url, data, httpOptions).pipe(operators_1.tap(function (res) {
            _this.notifierService.showSuccess('Your category has been created');
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    CategoryService.prototype.updateCategory = function (category) {
        var _this = this;
        var url = '/api/categories/' + category._id;
        return this.http.put(url, category, httpOptions).pipe(operators_1.tap(function (res) {
            _this.notifierService.showSuccess('Updated!');
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    CategoryService.prototype.deleteCategory = function (category) {
        var _this = this;
        var url = '/api/categories/' + category._id;
        return this.http.delete(url, httpOptions).pipe(operators_1.tap(function (res) {
            _this.notifierService.showSuccess('Deleted');
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    CategoryService.prototype.handleError = function (error) {
        this.notifierService.showError(error.error ? error.error.code : 1);
        return Observable_1.Observable.throw(error);
    };
    CategoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            authentication_service_1.AuthenticationService,
            notifier_service_1.NotifierService])
    ], CategoryService);
    return CategoryService;
}());
exports.CategoryService = CategoryService;


/***/ }),

/***/ "../../../../../src/app/services/notifier.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng2_toastr_1 = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
var error_map_1 = __webpack_require__("../../../../../src/app/common/error-map.ts");
var NotifierService = (function () {
    function NotifierService(toastr) {
        this.toastr = toastr;
    }
    NotifierService.prototype.showSuccess = function (message) {
        this.toastr.success(message);
    };
    NotifierService.prototype.showError = function (code) {
        var message = error_map_1.errorCodes[code];
        this.toastr.error(message);
    };
    NotifierService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [ng2_toastr_1.ToastsManager])
    ], NotifierService);
    return NotifierService;
}());
exports.NotifierService = NotifierService;


/***/ }),

/***/ "../../../../../src/app/services/task.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var notifier_service_1 = __webpack_require__("../../../../../src/app/services/notifier.service.ts");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var TasksService = (function () {
    function TasksService(http, authenticationService, notifierService) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.notifierService = notifierService;
    }
    TasksService.prototype.getTasks = function (id) {
        var url = '/api/tasks';
        return this.http.get(url, httpOptions).pipe(operators_1.tap(function (res) {
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    TasksService.prototype.addTask = function (data) {
        var _this = this;
        var url = '/api/tasks';
        return this.http.post(url, data, httpOptions).pipe(operators_1.tap(function (res) {
            _this.notifierService.showSuccess('Your task has been created');
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    TasksService.prototype.updateTask = function (task) {
        var _this = this;
        var url = '/api/tasks/' + task._id;
        return this.http.put(url, task, httpOptions).pipe(operators_1.tap(function (res) {
            _this.notifierService.showSuccess('Your task has been updated');
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    TasksService.prototype.deleteTask = function (task) {
        var _this = this;
        var url = '/api/tasks/' + task._id;
        return this.http.delete(url, httpOptions).pipe(operators_1.tap(function (res) {
            _this.notifierService.showSuccess('Deleted');
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    TasksService.prototype.handleError = function (error) {
        this.notifierService.showError(error.error.code ? error.error.code : 1);
        return Observable_1.Observable.throw(error);
    };
    TasksService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            authentication_service_1.AuthenticationService,
            notifier_service_1.NotifierService])
    ], TasksService);
    return TasksService;
}());
exports.TasksService = TasksService;


/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var operators_1 = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var notifier_service_1 = __webpack_require__("../../../../../src/app/services/notifier.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var httpOptions = {
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var UserService = (function () {
    function UserService(http, authenticationService, notifierService, router) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.notifierService = notifierService;
        this.router = router;
    }
    UserService.prototype.addUser = function (user) {
        var _this = this;
        var userUrl = '/api/users';
        return this.http.post(userUrl, user, httpOptions).pipe(operators_1.tap(function (res) {
            _this.authenticationService.setCurrentUser(res);
            _this.notifierService.showSuccess('Your account has been created');
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        var userUrl = '/api/users';
        return this.http.put(userUrl, user, httpOptions).pipe(operators_1.tap(function (res) {
            _this.authenticationService.setCurrentUser(res);
            _this.notifierService.showSuccess('Your account has been updated');
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    UserService.prototype.logoutUser = function () {
        var _this = this;
        var userUrl = '/logout';
        return this.http.get(userUrl, httpOptions).pipe(operators_1.tap(function (res) {
            _this.authenticationService.setCurrentUser(null);
            _this.notifierService.showSuccess('Bye-bye');
            _this.router.navigate(['/']);
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    ;
    UserService.prototype.loginUser = function (user) {
        var _this = this;
        var userUrl = '/api/login';
        return this.http.post(userUrl, user, httpOptions).pipe(operators_1.tap(function (res) {
            _this.authenticationService.setCurrentUser(res);
            _this.notifierService.showSuccess('You are in!');
        }), operators_1.catchError(this.handleError.bind(this)));
    };
    UserService.prototype.handleError = function (error) {
        this.notifierService.showError(error.error.code ? error.error.code : 1);
        return Observable_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            authentication_service_1.AuthenticationService,
            notifier_service_1.NotifierService,
            router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n    <div class=\"app-categories\">\n        <div class=\"app-grid\">\n            <div class=\"app-grid__item app-grid__item--3-4 app-margin--xxl\">\n                <ul class=\"\" *ngIf=\"categories.length\">\n                    <li *ngFor=\"let category of categories; let i = index\" class=\"app-category-item\">\n                        <header class=\"app-editable\">\n                            <h4 *ngIf=\"!category.editingCategory\" (click)=\"category.editingCategory = !category.editingCategory\" class=\"app-heading--third \">\n                                {{category.name}}\n\n                                    <span class=\"app-edit fa fa-pencil\"></span>\n\n                            </h4>\n                        </header>\n                        <div *ngIf=\"category.editingCategory\">\n                            <form name=\"categoryEditForm\" (ngSubmit)=\"category.editingCategory = false\" class=\"app-margin--m\">\n                                <input  [(ngModel)]=\"category.name\"  name=\"categoryName\" required=\"required\" class=\"app-form-control\" #categoryName=\"ngModel\"/>\n                                <div *ngIf=\"categoryName.errors\" class=\"app-alert app-margin--xxs\">\n                                    <span>This shouldn't be empty!</span>\n                                </div>\n                                <button (click)=\"saveEditedCategory(category)\" type=\"submit\" [disabled]=\"categoryName.errors\" class=\"app-btn app-btn--neutral app-margin--xs\">\n                                    Save\n                                </button>\n                                <button (click)=\"deleteCategory(category, i)\" class=\"app-btn--link app-margin--left app-margin--xs\">Delete</button>\n\n                            </form>\n                        </div>\n                        <ul class=\"app-margin--m\">\n                            <li *ngFor=\"let task of category.tasks; let j = index\" class=\"app-task app-grid app-editable\">\n                                <div class=\"app-grid__item--1-2\"><span [hidden]=\"task.editing\" (click)=\"task.editing = !task.editing\" class=\"gm-task__name app-editable\">\n                        <span>{{task.name}}</span>\n                            <button class=\"app-margin--left app-edit\">\n                                <span class=\"fa fa-pencil\"></span>\n                            </button>\n                        </span>\n                                    <form name=\"taskEditForm\" (ngSubmit)=\"task.editing = false\"  *ngIf=\"task.editing\" class=\"app-margin--xs\">\n                                        <input [(ngModel)]=\"task.name\" name=\"taskName\" required=\"required\" class=\"app-form-control\" #taskName=\"ngModel\"/>\n                                        <div *ngIf=\"taskName.errors\" class=\"app-alert app-margin--xxs\">\n                                            <span>This shouldn't be empty!</span>\n                                        </div>\n                                        <button (click)=\"saveEditedTask(task)\" type=\"submit\" [disabled]=\"taskName.errors\" class=\"app-btn app-margin--s app-btn--neutral\">\n                                            Save\n                                        </button>\n\n                                    </form>\n                                </div>\n                                <div class=\" app-grid__item--1-2 app-text-right app-edit\">\n                                    <span class=\"app-task__created\">Created on {{task.created |date }}</span>\n                                    <button (click)=\"deleteTask(category, task, j)\" class=\"app-btn--link\">Delete</button>\n                                </div>\n                            </li>\n                        </ul>\n                        <div class=\"\">\n                            <button class=\"btn\">\n                                <span *ngIf=\"!category.addingTask\" (click)=\"category.addingTask = !category.addingTask\" title=\"Add a new task!\" class=\"fa fa-plus app-margin--m app-add-task__trigger\"></span>\n                            </button>\n                            <form name=\"addTaskForm\" *ngIf=\"category.addingTask\" (submit)=\"category.addingTask = false\" class=\"gm-add-task-form form-inline\">\n                                <div class=\"form-group\">\n                                    <input [(ngModel)]=\"category.newTask\" name=\"taskName\" required class=\"app-form-control\"  #taskName=\"ngModel\"/>\n                                </div>\n                                <div class=\"form-group\">\n                                    <button (click)=\"addTask(category, category.newTask)\" [disabled]=\"!category.newTask\" class=\"app-btn app-btn--neutral app-margin--s\">Add task</button>\n                                    <span (click)=\"category.addingTask = false\" class=\"app-margin--left app-btn-link app-btn app-margin--s\">Cancel</span>\n                                </div>\n                            </form>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"app-grid__item app-grid__item--1-4 \">\n                <h4 class=\"app-heading--third app-margin--xxl \">Create a category</h4>\n                <form name=\"addCategoryForm\" class=\"app-margin--m\" id=\"add-category\">\n                    <input [(ngModel)]=\"newCategory\" required=\"required\" class=\"app-form-control\" name=\"newCategoryName\"/>\n                    <button (click)=\"addCategory()\" type=\"submit\" [disabled]=\"!newCategory\" class=\"app-btn app-btn--attention app-margin--s\">Add</button>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var category_service_1 = __webpack_require__("../../../../../src/app/services/category.service.ts");
var authentication_service_1 = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var task_service_1 = __webpack_require__("../../../../../src/app/services/task.service.ts");
var TasksComponent = (function () {
    function TasksComponent(categoryService, authenticationService, tasksService) {
        this.categoryService = categoryService;
        this.authenticationService = authenticationService;
        this.tasksService = tasksService;
        this.categories = [];
        this.newCategory = '';
    }
    TasksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authenticationService.getCurrentUser();
        this.categoryService.getCategories(this.user._id)
            .subscribe(function (res) {
            _this.categories = res;
        });
    };
    TasksComponent.prototype.addCategory = function () {
        var _this = this;
        this.categoryService.addCategory({ name: this.newCategory, userId: this.user._id })
            .subscribe(function (res) {
            _this.newCategory = '';
            _this.categories.push(res);
        });
    };
    ;
    TasksComponent.prototype.saveEditedCategory = function (category) {
        this.categoryService.updateCategory(category)
            .subscribe();
    };
    ;
    TasksComponent.prototype.deleteCategory = function (category, index) {
        var _this = this;
        if (confirm('Do you want to delete the category')) {
            this.categoryService.deleteCategory(category)
                .subscribe(function (res) {
                _this.categories.splice(index, 1);
            });
        }
    };
    TasksComponent.prototype.saveEditedTask = function (task) {
        this.tasksService.updateTask(task)
            .subscribe();
    };
    ;
    TasksComponent.prototype.addTask = function (category, newTask) {
        var taskData = { name: newTask, done: false, category: category._id };
        this.tasksService.addTask(taskData)
            .subscribe(function (res) {
            category.tasks.push(res);
            category.newTask = "";
        });
    };
    ;
    TasksComponent.prototype.deleteTask = function (category, task, index) {
        if (confirm('Do you want to delete the task?')) {
            this.tasksService.deleteTask(task)
                .subscribe(function (res) {
                category.tasks.splice(index, 1);
            });
        }
    };
    TasksComponent = __decorate([
        core_1.Component({
            selector: 'app-tasks',
            template: __webpack_require__("../../../../../src/app/tasks/tasks.component.html")
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService,
            authentication_service_1.AuthenticationService,
            task_service_1.TasksService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map