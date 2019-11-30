import { Component, OnInit } from '@angular/core';
import { UserService} from "../../services/user.service";
import { ActivatedRoute,Router,NavigationStart, NavigationEnd } from '@angular/router';
import {User} from "../../models/User";
import { Location } from '@angular/common';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html',
  styleUrls: ['./addedit.component.css']
})
export class AddeditComponent implements OnInit {
  user:User={
    id:"",
    first_name:"",
    last_name:"",
    gender:"male", //wymagane przez gorest api
    email:"",
    address:"",
  };
  xax;
  userID:string;
  constructor(private location: Location,private userService:UserService, private route:ActivatedRoute, private router:Router) { 
    this.route.paramMap.subscribe(params => {
      this.userID = params.get("id");
      console.log(this.userID)
      if(this.userID)
      {        
        this.userService.getUserById(this.userID).subscribe(response=>{      
          this.user = response.result;                    
        });  
      }
    
  });  
  }
  cancel() {
    this.location.back(); 
  }
  create(user){    
    this.userService.createUser(user).subscribe(response=>{  
      if(response._meta.code==200){
        alert("Created")
        this.location.back();       
      }          
    }); 
  }
  edit(user){
    this.userService.editUser(user).subscribe(response=>{  
      if(response._meta.code==200){
        alert("Edited")
        this.location.back();          
      }          
    }); 
  }

  ngOnInit() {
  }

}
