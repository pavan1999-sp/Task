import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../service/project-service.service';


@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  project=new Project();
  @Input() public parentdata:any;
  constructor(private ps:ProjectServiceService,private router:Router) { }
  onSubmit()
  {
if(this.parentdata){
  console.log("this.project");
  this.ps.updateProjects(this.project.projectId,this.project).subscribe((res)=>{

    console.log(res);
  })
}
else{
this.ps.createProjects(this.project).subscribe((res)=>{
  alert("succesfully creted");

  this.router.navigate([""])
  console.log(res);
})
}


    console.log(this.project);
    
  }



  ngOnInit(): void {
    if(this.parentdata){
      this.project=this.parentdata
    }
  console.log(this.parentdata)

  }

}


