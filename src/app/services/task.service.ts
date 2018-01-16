import { Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import 'rxjs/add/observable/throw';
import { NotifierService } from './notifier.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class TasksService {

    constructor(private http:HttpClient,
                private authenticationService: AuthenticationService,
                private  notifierService:NotifierService) {
    }

    getTasks(id) {
        const url = '/api/tasks';

        return this.http.get(url, httpOptions).pipe(
            tap((res) => {
            }),
            catchError(this.handleError.bind(this))
        );
    };


    addTask(data) {
        const url = '/api/tasks';

        return this.http.post(url, data, httpOptions).pipe(
            tap((res) => {
                this.notifierService.showSuccess('Your task has been created');
            }),
            catchError(this.handleError.bind(this))
        );
    };

    updateTask(task) {
        const url = '/api/tasks/' + task._id;

        return this.http.put(url, task, httpOptions).pipe(
            tap((res) => {
                this.notifierService.showSuccess('Your task has been updated');
            }),
            catchError(this.handleError.bind(this))
        );
    };

    deleteTask(task) {
        const url = '/api/tasks/' + task._id;

        return this.http.delete(url, httpOptions).pipe(
            tap((res) => {
                this.notifierService.showSuccess('Deleted');
            }),
            catchError(this.handleError.bind(this))
        );
    };

    handleError (error: Response | any) {
        this.notifierService.showError(error.error ? error.error.code : 1);
        return Observable.throw(error);
    }
}
