import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Types/task';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {
  task: Task = {
    TaskTitle: '',
    Describtion: '',
    Priority: '',
    DueDate: '',
  };

  tasks: Task[] = [];

  onSubmit() {
    console.log('Submitted ..............');
    this.tasks.push({ ...this.task });
    console.log(this.task);
    console.log(this.tasks);

    this.task = {
      TaskTitle: '',
      Describtion: '',
      Priority: '',
      DueDate: '',
    };
  }

  onTitleChanged(title: string) {
    this.task.TaskTitle = title;
    // console.log(this.task);
  }
}
