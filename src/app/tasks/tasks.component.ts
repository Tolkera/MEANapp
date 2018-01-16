import {Component, OnInit } from '@angular/core';
import {CategoryService} from '../services/category.service';
import { AuthenticationService } from '../services/authentication.service';
import { TasksService } from '../services/task.service';
import { User } from '../types/user';
import {Category} from '../types/category';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  constructor (private categoryService: CategoryService,
               private authenticationService: AuthenticationService,
               private tasksService: TasksService
  ) {}

    user: User;
    categories: Category[] = [];
    newCategory = '';

  ngOnInit() {

      this.user = this.authenticationService.getCurrentUser();
      this.categoryService.getCategories(this.authenticationService.getCurrentUser()._id)
        .subscribe(
            res  => {
              this.categories = <any>res;
            }
        );
  }



  addCategory(){
    this.categoryService.addCategory({name: this.newCategory, userId: this.user._id })
        .subscribe(
            res  => {
                this.newCategory = '';
                this.categories.push(<any>res);
            }
        );
  };

  saveEditedCategory(category){
    this.categoryService.updateCategory(category)
        .subscribe();

  };

    deleteCategory(category, index){

        if (confirm('Sure?')) {
            this.categoryService.deleteCategory(category)
                .subscribe(
                    res  => {
                        this.categories.splice(index, 1);
                    }
                );
        }
    }

    saveEditedTask(task){
        this.tasksService.updateTask(task)
            .subscribe();
    };

    addTask(category, newTask){
        let taskData = {name: newTask, done: false, category: category._id};
        this.tasksService.addTask(taskData)
            .subscribe(
                res  => {
                    console.log(res);
                    category.tasks.push(res);
                    category.newTask = "";
                }
            );
    };

    deleteTask(category, task, index){

        if (confirm('Sure?')) {
            this.tasksService.deleteTask(task)
                .subscribe(
                    res  => {
                        category.tasks.splice(index, 1);
                    }
                );
        }
    }

}
