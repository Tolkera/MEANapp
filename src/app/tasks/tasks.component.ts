import {Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {NotifierService} from '../services/notifier.service';
import {RouterModule, Router,  ActivatedRoute}   from '@angular/router';
import {CategoryService} from '../services/category.service';
import { AuthenticationService } from '../services/authentication.service';
import { TasksService } from '../services/task.service';
import { User } from '../types/user';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor (private notifierService: NotifierService,
               private categoryService: CategoryService,
               private authenticationService: AuthenticationService,
               private tasksService: TasksService
  ) {}

    user: User;

  ngOnInit() {

      this.user = this.authenticationService.getCurrentUser();
    this.categoryService.getCategories(this.authenticationService.getCurrentUser()._id)
        .subscribe(
            res  => {
              this.categories = res;
            }
        );
  }

  newCategory = '';
  categories = [];

  addCategory(){
    this.categoryService.addCategory({name: this.newCategory, userId: this.user._id })
        .subscribe(
            res  => {
                this.newCategory = '';
                this.categories.push(res);
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

}
