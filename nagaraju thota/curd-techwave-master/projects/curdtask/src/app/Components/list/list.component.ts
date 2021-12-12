import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curd } from '../../ClassModel/curd';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public id:number;
  public values;
  constructor(private route:ActivatedRoute,private ps:ProjectService) { }
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
    if(this.id != 0){
      this.ps.getId(this.id).subscribe(
       (res)=>{
         this.values=res;
         console.log(this.values);
         
       }
     )
    }
  }

}
