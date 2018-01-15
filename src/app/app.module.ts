import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { ProfileComponent } from './profile/profile.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { TasksComponent } from './tasks/tasks.component';

import { NotifierService } from './services/notifier.service';
import { TasksService } from './services/task.service';
import { CategoryService } from './services/category.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastModule.forRoot()
  ],
  providers: [
    UserService,
    AuthenticationService,
    NotifierService,
    TasksService,
    CategoryService,
    AuthGuardService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
