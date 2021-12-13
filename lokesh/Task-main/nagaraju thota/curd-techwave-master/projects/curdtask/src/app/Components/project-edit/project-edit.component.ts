import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Curd } from '../../ClassModel/curd';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {

  public id: number;
  header: string;
  project:Curd;
  constructor(private router: Router, private ps: ProjectService, private route: ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.header = this.id === 0 ? 'Add Project' : 'Edit Project';
    if(this.id != 0){
      this.ps.getId(this.id).subscribe(
       (res)=>{
        this.project=res;
        console.log(this.project);
       }
     )
    }
  }

  noSubmite() {
    
    if(this.id === 0){
      this.http.post<Curd>("http://localhost:3000/project",this.project);
      console.log(this.project);
    }
    else{
      console.log("Update Success",this.project,this.id);
      this.ps.putProject(this.project,this.id);
    }

    this.router.navigateByUrl('');
   
  }
  

}
