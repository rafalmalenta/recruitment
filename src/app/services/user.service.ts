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
export class UserService {
  usersURL:string = "https://gorest.co.in/public-api/users";
  querybase:string = "?_format=json&";
  key:string = "access-token=XxMkjZ15GADpkwXDmUszesK9mK5w_UXaK0dJ&";

  constructor(private http:HttpClient) { }

    getUserById(id):Observable<any>{
      //console.log(`${this.usersURL}/${id}${this.querybase}`)
      return this.http.get(`${this.usersURL}/${id}${this.querybase}`)
    }
    getUsersPage(page):Observable<any>{
      return this.http.get<any>(`${this.usersURL}${this.querybase}${this.key}page=${page}`)
    }
    createUser(user):Observable<any>{
      return this.http.post<any>(`${this.usersURL}${this.querybase}`,user,httpOptions)
    }


  
}
