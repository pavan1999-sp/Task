import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from '../service/project-service.service';

@Component({
  selector: 'app-projectinfo',
  templateUrl: './projectinfo.component.html',
  styleUrls: ['./projectinfo.component.css']
})
export class ProjectinfoComponent implements OnInit {
  projects:any
  public selectddata:any
  constructor(private ps:ProjectServiceService) { }
public editdata(projectId:any){
  this.ps.getslectedrow(projectId).subscribe((res)=>{
    console.log(res)
    this.selectddata=res;
  })
}

  public getinfo(){
    this.ps.getProjects().subscribe((res)=>{
      this.projects=res;
    })
  }

public deletedata(id:any){
  this.ps.dleteslectedrow(id).subscribe((res)=>{
    console.log(res);
  })
}




  ngOnInit(): void {
    this.getinfo()
  }

}
