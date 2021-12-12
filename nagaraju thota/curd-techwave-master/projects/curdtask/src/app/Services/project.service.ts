import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curd } from '../ClassModel/curd';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public url = "http://localhost:3000/project";
  project:Curd;
  constructor(private http: HttpClient) { }

  // postProject method
  postProject(obj:Curd):Observable<Curd> {
    return this.http.post<Curd>(this.url,obj);
    console.log("server post",obj);
    
  }
  // Get Project Method
  getProject():Observable<Curd[]>{
    return this.http.get<Curd[]>(this.url);
  }
  // get id
  getId(id:number ):Observable<Curd>{
    return this.http.get<Curd>(`${this.url}/`+id)
  }
  // Put project Method
  putProject(obj: Curd,id:number) {
  console.log("server id",id);
  console.log("server obj",obj);
    return this.http.put(`${this.url}/`+id,obj);
  }
  // Delete project Method
  deletData(id:number) {
    return this.http.delete(`${this.url}/` + id);
  }
}
