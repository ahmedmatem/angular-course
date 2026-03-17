import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type TaskDetails } from '../task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() newTask = new EventEmitter<TaskDetails>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit(){
    this.newTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}
