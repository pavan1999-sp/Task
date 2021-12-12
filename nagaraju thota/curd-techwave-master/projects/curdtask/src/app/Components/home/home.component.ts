import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../Services/project.service';
import { Curd } from '../../ClassModel/curd';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  project:Curd[];
  public projects:any;


  singleProject: any;
   
  constructor(private router:Router, private ps: ProjectService) { }

  ngOnInit(): void {
    this.getProject();
  }

  //Get Data
  getProject() {
    this.ps.getProject().subscribe(
      (res)=>{
        this.singleProject=res;
      }
    );
  }

  // Delect Project
  deleteProject(obj:number) {
    let comform = confirm('Are you shure? Do you want delete');
    if (comform == true) {
      this.ps.deletData(obj).subscribe(() => {
          this.getProject();
        }
      )
    }
  }

}




