import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { EmployeeService } from '../../shared/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,
    public dialogRef: MatDialogRef<EmployeeComponent>) { }

  ngOnInit() {
  }
 onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
 } 
 onClose() {
  this.service.form.reset();
  this.service.initializeFormGroup();
  this.dialogRef.close();
}

}
