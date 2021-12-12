import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
public api:string="http://localhost:3000/projects";
  constructor(private http:HttpClient) { }
  getProjects():Observable<any>
  {
    return this.http.get<any>(this.api);
  }

  getslectedrow(id:any):Observable<any>
  {
    return this.http.get<any>("http://localhost:3000/projects/"+id);
  }
 createProjects(data:any):Observable<any>
  {
    return this.http.post<any>(this.api,data);
  }
  updateProjects(id:any,data:any):Observable<any>
  {
    return this.http.put<any>("http://localhost:3000/projects/"+id,data);
  }

  dleteslectedrow(id:any):Observable<any>{

    return this.http.delete<any>("http://localhost:3000/projects/"+id);
  }

}
