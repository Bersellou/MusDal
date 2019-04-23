import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog , MatDialogConfig, MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { EmployeeComponent } from './employee/employee.component';

export interface EmployesItem{
  Nom : string ;
  Prenom : string ;
  Email : string ;
  Telephone : number ; 
  Poste : string ;
}

const EXAMPLE_DATA: EmployesItem[] = [
  { Nom: 'Bersellou' , Prenom : 'Mustapha', Email: 'bersellou@gmail.com' , Telephone : 23212878, Poste : 'Developpeur' },
  { Nom : 'Laameri' , Prenom : 'Dali' , Email : 'dali@gmail.com' , Telephone : 235698741 , Poste : 'Developpeur' },
  { Nom : 'Saidi' , Prenom: 'Nader' , Email : 'nader@gamil.com', Telephone: 589647812 , Poste: 'Responsable RH'},
];
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private dialog: MatDialog,
   ) { }
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

  dataSource: MatTableDataSource<any>;
  searchKey : string ;
  ajouter= false ;
  modifier= false;

  displayedColumns= ['Nom', 'Prenom' , 'Email', 'Telephone','Poste', 'Action'] ;

  ngOnInit() {
    this.dataSource= new MatTableDataSource(EXAMPLE_DATA);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }
  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }
  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  ajouterDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus= true;
    dialogConfig.width='40%';
    dialogConfig.height='60%';
    this.dialog.open(EmployeeComponent, dialogConfig);
  }
  

}
