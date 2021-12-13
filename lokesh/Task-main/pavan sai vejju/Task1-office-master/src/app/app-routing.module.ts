import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddprojectComponent } from './addproject/addproject.component';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';

const routes: Routes = [{path:"",component:ProjectinfoComponent},
  {path:"addproject",component:AddprojectComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
