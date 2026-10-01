import { Component, Input } from '@angular/core';
import { Task } from '../../Types/task';
import { Card } from '../card/card';

@Component({
  selector: 'app-not-done-tasks-list',
  imports: [Card],
  templateUrl: './not-done-tasks-list.html',
  styleUrl: './not-done-tasks-list.css',
})
export class NotDoneTasksList {
  @Input()
  importedList: Task[] = [];
}
