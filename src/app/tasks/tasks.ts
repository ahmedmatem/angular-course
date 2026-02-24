import { Component, Input } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string | undefined;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Angular is very borring sometimes...',
      summary: 'Learn all the basic of Angular',
      dueDate: '2026-02-14'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Angular is very borring sometimes...',
      summary: 'Learn all the basic of Angular',
      dueDate: '2026-02-14'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Angular is very borring sometimes...',
      summary: 'Learn all the basic of Angular',
      dueDate: '2026-02-14'
    }
  ];

  get selectedUserTasks(){
    return this.tasks.filter((t) => t.userId === this.userId)
  }
}
