import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import { EmploisComponent } from './emplois/emplois.component';

const routes: Routes = [
  
  {
    path: 'employes' ,
    component: EmployeesComponent,
  } ,
  
  {
    path : 'emplois' ,
    component : EmploisComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
