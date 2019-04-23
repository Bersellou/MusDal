import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from "./material/material.module";
import {ReactiveFormsModule,FormsModule} from "@angular/forms";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeService} from './shared/employee.service';
import { BrowserAnimationsModule} from'@angular/platform-browser/animations';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmploisComponent } from './emplois/emplois.component';
import { MatStepperModule, MatIconModule } from '@angular/material';
import { EmploiComponent } from './emplois/emploi/emploi.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    SidebarComponent,
    EmploisComponent,
    EmploiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SmartTableModule
   
  
  

    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents:[EmployeeComponent]
})
export class AppModule { }
