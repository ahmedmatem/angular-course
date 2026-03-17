import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { TaskDetails } from './task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string | undefined;
  isAddingTask: boolean = false;

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

  onCompleteTask(taskId: string){
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancel() {
    this.isAddingTask = false;
  }

  onNewTask(newTask: TaskDetails) {
    this.isAddingTask = false;
    this.tasks.unshift({
      id: Date.now().toString(),
      userId: this.userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date
    });
  }
}
