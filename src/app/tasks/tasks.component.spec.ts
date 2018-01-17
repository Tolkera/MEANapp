import { async, ComponentFixture, TestBed,  } from '@angular/core/testing';
import {Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormsModule }   from '@angular/forms';
import 'rxjs/add/observable/of';
import { By }  from '@angular/platform-browser';
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
    let tasksServiceStub,
        tasksService;
    let mockUser;

  beforeEach(async(() => {

      mockUser = {
          _id: '12',
          username: 'Bubba',
          firstName: 'Bu'
      };

    authServiceStub = {
      getCurrentUser: function(){
        return {mockUser}
        }
    };

    stubCategories = [
      {_id: 1, name: 'Category 1'}
    ];


    categoryServiceStub = {
      getCategories() {
          return Observable.of(stubCategories)
      },
        addCategory() {
            return Observable.of(stubCategories)
        },
        deleteCategory() {
            return Observable.of([])
        },
        updateCategory() {
            return Observable.of([])
        }
    };


    TestBed.configureTestingModule({
        imports: [FormsModule],
        declarations: [ TasksComponent ],
        providers: [
            {provide: AuthenticationService, useValue: authServiceStub },
            {provide: CategoryService, useValue: categoryServiceStub },
            {provide: TasksService, useValue: tasksServiceStub },
        ],
        schemas: [ NO_ERRORS_SCHEMA ]


    })
    .compileComponents();

      fixture = TestBed.createComponent(TasksComponent);
      component = fixture.componentInstance;

      authService = fixture.debugElement.injector.get(AuthenticationService);
      categoryService = fixture.debugElement.injector.get(CategoryService);
      tasksService = fixture.debugElement.injector.get(TasksService);


  }));

      it('should call the categories service and get categories', () => {
        spyOn(categoryService, 'getCategories').and.returnValue( Observable.of(stubCategories));
        fixture.detectChanges();

        expect(categoryService.getCategories).toHaveBeenCalled();
        expect(component.categories.length).toEqual(1);
      });


    it('should add a category ', () => {
        let categoryData = {_id: 2, name: 'Category 2'};
        spyOn(categoryService, 'addCategory').and.returnValue( Observable.of(categoryData));

        component.newCategory = categoryData.name;
        component.user = mockUser;

        fixture.detectChanges();

        component.addCategory();

        expect(categoryService.addCategory).toHaveBeenCalled();
        expect(component.categories.length).toEqual(2);
        expect(component.categories).toEqual(stubCategories);
    });

    it('should remove a category ', () => {
        spyOn(window, 'confirm').and.callFake(function () {
            return true;
        });
        spyOn(categoryService, 'deleteCategory').and.returnValue( Observable.of([]));

        component.user = mockUser;
        fixture.detectChanges();

        component.deleteCategory({}, 0);

        expect(categoryService.deleteCategory).toHaveBeenCalled();
        expect(component.categories.length).toEqual(0);
    });
});
