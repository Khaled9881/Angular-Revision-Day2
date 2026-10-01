import { Component } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskList } from '../task-list/task-list';
import { Task } from '../../Types/task';

@Component({
  selector: 'app-task-project',
  imports: [TaskForm, TaskList],
  templateUrl: './task-project.html',
  styleUrl: './task-project.css',
})
export class TaskProject {
  tasks: Task[] = [];

  ReceiveTasks(data: Task[]) {
    console.log(data);
    this.tasks = data;
  }
}
