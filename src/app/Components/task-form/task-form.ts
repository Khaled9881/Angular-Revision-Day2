import { Component, EventEmitter, NgModule, Output, output } from '@angular/core';
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
    IsDone: false,
  };

  @Output()
  exportTeasksEvent = new EventEmitter<Task[]>();

  tasks: Task[] = [];

  onSubmit() {
    console.log('Submitted ..............');
    this.tasks.push({ ...this.task });
    // console.log(this.task);
    // console.log(this.tasks);

    // this.task = {
    //   TaskTitle: '',
    //   Describtion: '',
    //   Priority: '',
    //   DueDate: '',
    //   IsDone: false,
    // };

    this.exportTeasksEvent.emit(this.tasks);
  }

  onTitleChanged(title: string) {
    this.task.TaskTitle = title;
    // console.log(this.task);
  }
}
