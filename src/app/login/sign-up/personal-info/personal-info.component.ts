import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import{ LoginDataService } from '../../../login-data.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  formVar: FormGroup;

  

  public model = {
    name: '',
    email: '',
    pass: ''
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  nameFormControl = new FormControl('',[
    Validators.required
  ]);

  passwordFormControl =  new FormControl('',[
    Validators.required
  ]);

  constructor( private fb: FormBuilder, 
    private lds: LoginDataService,
    private router: Router) {}

  ngOnInit() {
     this.formVar = this.fb.group(this.model);
  }

  onSubmit(){
    if(this.nameFormControl.status === "VALID" &&  this.emailFormControl.status === "VALID" && this.passwordFormControl.status === "VALID"){
      this.lds.setPersonalFormData(this.model)
        this.router.navigate(['/login']);
    }  
  }
}
