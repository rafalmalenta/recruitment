import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from "../models/User"

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersURL:string = "https://gorest.co.in/public-api/users?_format=json&access-token=XxMkjZ15GADpkwXDmUszesK9mK5w_UXaK0dJ";
  constructor(private http:HttpClient) { }

    getUsers():Observable<any>{
      return this.http.get<any>(`${this.usersURL}`)
    }

  
}
