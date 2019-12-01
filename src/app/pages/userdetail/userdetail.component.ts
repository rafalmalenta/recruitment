import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(userService:UserService, postsService:PostsService) { }

  ngOnInit() {
  }

}
