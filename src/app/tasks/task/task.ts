import { Component, Input } from '@angular/core';
import { TaskModel } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task: TaskModel | undefined;

  onComplete(){
    console.log('Task is done ...');
  }
}
