import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  selectedUser = DUMMY_USERS[randomUserIndex];

  get imagePath(){
    return 'assets/img/' + this.selectedUser.avatar;
  }

  onSelectedUser(){
    const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomUserIndex];
  }
}
