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
export class CategoryService {

    constructor(private http:HttpClient,
                private authenticationService:AuthenticationService,
                private  notifierService:NotifierService) {
    }

    getCategories(id) {
        const url = '/api/categories';

        return this.http.get(url, httpOptions).pipe(
            tap((res) => {}),
            catchError(this.handleError.bind(this))
        );
    };


    addCategory(data) {
        const url = '/api/categories';

        return this.http.post(url, data, httpOptions).pipe(
            tap((res) => {
                this.notifierService.showSuccess('Your category has been created');
            }),
            catchError(this.handleError.bind(this))
        );
    };

    updateCategory(category) {
        const url = '/api/categories/' + category._id;
        console.log(category)

        return this.http.put(url, category, httpOptions).pipe(
            tap((res) => {
                this.notifierService.showSuccess('Your category has been created');
            }),
            catchError(this.handleError.bind(this))
        );
    };

    deleteCategory(category) {
        const url = '/api/categories/' + category._id;

        return this.http.delete(url, httpOptions).pipe(
            tap((res) => {
                this.notifierService.showSuccess('Your category has been deleted');
            }),
            catchError(this.handleError.bind(this))
        );
    };



    handleError (error: Response | any) {
        this.notifierService.showError(error.error ? error.error.code : 1);
        return Observable.throw(error);
    }
}
