import { async, ComponentFixture, TestBed,  } from '@angular/core/testing';
import {Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {CategoryService} from '../services/category.service';
import { AuthenticationService } from '../services/authentication.service';
import { TasksService } from '../services/task.service';
import { User } from '../types/user';
import {Category} from '../types/category';
import { TasksComponent } from './tasks.component';

describe('TasksComponent', () => {
  let component: TasksComponent;
  let fixture: ComponentFixture<TasksComponent>;
  let authServiceStub,
      authService;
  let stubCategories;
  let categoryServiceStub,
      categoryService;

  beforeEach(async(() => {

    authServiceStub = {
      getCurrentUser: function(){
        return {
          _id: 12
          }
        }
    };


    stubCategories = [
      {_id: 1, name: 'Cat 1'}
    ];

    categoryServiceStub = {
      getCategories(): Observable {
        return Observable.of(stubCategories);
      }
    };


    TestBed.configureTestingModule({
        declarations: [ TasksComponent ],
        providers: [
          {provide: AuthenticationService, useValue: authServiceStub },
          {provide: CategoryService, useValue: categoryServiceStub },
        ],
        schemas: [ NO_ERRORS_SCHEMA ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    //fixture.detectChanges();
    //expect(component).toBeTruthy();
  });
});
