import { Component, Input } from '@angular/core';
import { Task } from '../../Types/task';
import { AllTasksList } from '../all-tasks-list/all-tasks-list';
import { DoneTasksList } from '../done-tasks-list/done-tasks-list';
import { NotDoneTasksList } from '../not-done-tasks-list/not-done-tasks-list';

@Component({
  selector: 'app-task-list',
  imports: [AllTasksList, DoneTasksList, NotDoneTasksList],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  @Input()
  importedTasks: Task[] = [];

  TasksState: string | undefined = '';

  get task(): string | undefined {
    return this.importedTasks[0]?.Describtion;
  }

  get DoneTasks(): Task[] {
    return this.importedTasks.filter((task) => task.IsDone === true);
  }

  get NotDoneTasks(): Task[] {
    return this.importedTasks.filter((task) => task.IsDone === false);
  }

  showList(value: string) {
    this.TasksState = value;
  }
}
