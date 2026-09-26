import { Component } from '@angular/core';
import { TaskForm } from '../task-form/task-form';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-task-project',
  imports: [TaskForm, TaskList],
  templateUrl: './task-project.html',
  styleUrl: './task-project.css',
})
export class TaskProject {}
