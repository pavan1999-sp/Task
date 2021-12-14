import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpUpdComponent } from './emp-upd/emp-upd.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path:'', component:TableComponent},
  { path:'update', component:EmpUpdComponent},
  // { path:'', redirectTo: 'home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
