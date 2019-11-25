import { Component, OnInit,Input } from '@angular/core';
import { User } from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        id:12,
        firstName:"Rafał",        
      },
      {
        id:1,
        firstName:"Radek"
      }

    ]
  }

}
