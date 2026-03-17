import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskModel } from './task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task: TaskModel | undefined;
  @Output() complete = new EventEmitter<string>();

  onComplete(){
    this.complete.emit(this.task?.id);
  }
}
