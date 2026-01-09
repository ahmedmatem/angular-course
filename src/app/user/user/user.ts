import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required: true}) user!: {id: string, name: string, avatar: string};

  get imagePath(){
    return 'assets/img/' + this.user.avatar;
  }

  onSelectedUser(){
    console.log(`User ${this.user.name} with ID ${this.user.id} selected.`);
  }
}
