import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Types/task';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [NgClass, CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  @Input()
  CardTask: Task = {
    TaskTitle: '',
    Describtion: '',
    DueDate: '',
    IsDone: false,
    Priority: '',
  };

  ngOnInit(): void {
    console.log(this.CardTask);
  }
}
