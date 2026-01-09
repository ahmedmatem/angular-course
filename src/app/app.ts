import { Component } from '@angular/core';
import { Header } from "./header/header";
import { User } from "./user/user/user";
import { DUMMY_USERS } from "./dummy-users";
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  imports: [Header, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  protected readonly title = 'first-app';
  selectdeUserId: string = 'u1';
  
  get selectedUser(){
    return this.users.find(u => u.id === this.selectdeUserId);
  }

  onSelectedUser(userId: string) {
    this.selectdeUserId = userId;
  }
}
