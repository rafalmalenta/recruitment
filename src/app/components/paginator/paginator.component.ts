import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit ,OnChanges{
@Input() pageCount:number
@Input() currentPage:number
  constructor() { }

  ngOnInit() {
    //console.log(this.pageCount)
  }
  ngOnChanges(){
    
  }

}
