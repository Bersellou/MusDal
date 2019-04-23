import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key : new FormControl(null) ,
    firstName: new FormControl('', Validators.required),
    lastName:new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required,Validators.email]),
    mobile: new FormControl('',[Validators.required, Validators.minLength(8)]),
    dateNaissance: new FormControl('',Validators.required),
    diplome: new FormControl('',Validators.required),
    niveauInstruction: new FormControl('',Validators.required),
    adresse: new FormControl('',Validators.required),
    emploi:new FormControl('',Validators.required),
    managerN1: new FormControl(''),
    managerN2: new FormControl(''),
    dateRecrutement: new FormControl('',Validators.required),
    dateDepart: new FormControl(''),
    sexe : new FormControl(''),


  }); 

  initializeFormGroup(){
    this.form.setValue({
    $key : null ,
    firstName:'' ,
    lastName: '',
    email : '',
    mobile: '',
    dateNaissance: '',
    diplome: '',
    niveauInstruction: '',
    adresse: '',
    emploi: '',
    managerN1: '',
    managerN2: '',
    dateRecrutement: '',
    dateDepart: '',
    sexe : '1',
});

  }
}
