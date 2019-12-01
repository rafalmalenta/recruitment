import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit ,OnChanges{
@Input() pageCount:number
@Input() currentPage:number
@Input() URL:string
  constructor(private router:Router) { }

  ngOnInit() {
    //console.log(this.pageCount)
  }
  ngOnChanges(){
    
  }
  reload(value,URL){    
    this.router.navigate([URL,value])
  }

}
