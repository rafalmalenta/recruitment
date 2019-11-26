import { Component, OnInit,Input, OnChanges } from '@angular/core';
import {Observable} from "rxjs"
import { User } from "../../models/User";
import { UserService } from "../../services/user.service";
import { ActivatedRoute,Router } from '@angular/router';
import {NavigationStart, NavigationEnd} from "@angular/router"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  pageCount: number;
  currentPage:number;
  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
      }

      if (event instanceof NavigationEnd) {
        this.userService.getUsersPage(this.currentPage).subscribe(response=>{      
          this.users = response.result;
          this.pageCount = response._meta.pageCount;
          console.log(this.currentPage)
        });  
      }
   })
   this.route.paramMap.subscribe(params => {
        this.currentPage = parseInt(params.get("page"));
      
    });  
  }
  ngOnInit() {   
    
    
    // this.userService.getUsersPage(this.currentPage).subscribe(response=>{      
    //   this.users = response.result;
    //   this.pageCount = response._meta.pageCount
    // });      

  }
 

  

}
