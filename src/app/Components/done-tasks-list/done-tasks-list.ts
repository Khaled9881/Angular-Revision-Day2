import { Component, Input } from '@angular/core';
import { Task } from '../../Types/task';
import { Card } from '../card/card';

@Component({
  selector: 'app-done-tasks-list',
  imports: [Card],
  templateUrl: './done-tasks-list.html',
  styleUrl: './done-tasks-list.css',
})
export class DoneTasksList {
  @Input()
  importedList: Task[] = [];
}
