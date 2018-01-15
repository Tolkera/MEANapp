import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegistrationComponent} from './registration/registration.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {TasksComponent} from './tasks/tasks.component';
import { AuthGuardService } from './services/auth-guard.service';


const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },

    {
        path: 'register',
        component: RegistrationComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        canActivate: [AuthGuardService],
        path: 'tasks',
        component: TasksComponent
    },
    { path: '',   component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
            //    enableTracing: true,
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
