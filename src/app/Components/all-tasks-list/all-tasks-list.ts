import { Component, Input } from '@angular/core';
import { Task } from '../../Types/task';
import { Card } from '../card/card';

@Component({
  selector: 'app-all-tasks-list',
  imports: [Card],
  templateUrl: './all-tasks-list.html',
  styleUrl: './all-tasks-list.css',
})
export class AllTasksList {
  @Input()
  importedList: Task[] = [];
}
