import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from "../models/User";

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer XxMkjZ15GADpkwXDmUszesK9mK5w_UXaK0dJ'
  })
  };

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
}
