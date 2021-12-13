import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curd } from '../ClassModel/curd';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = "http://localhost:3000/register";

  constructor(private http: HttpClient) { }
  //get login_method
  getLogin(email: Curd): Observable<Curd[]> {
    return this.http.get<Curd[]>(`${this.loginUrl}?email=${email}`)
  }
}



