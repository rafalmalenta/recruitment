import { Component, OnInit,Input } from '@angular/core';
import { User } from "../../models/User";
import { UserService } from "../../services/user.service"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(response=>{
      console.log(response.result)
      this.users = response.result
    })
  }

}
