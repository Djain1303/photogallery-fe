import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
    Validators.email,
  ]);

  nameFormControl = new FormControl('',[
    Validators.required
  ]);

  passwordFormControl =  new FormControl('',[
    Validators.required
  ]);

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    this.formVar = this.fb.group(this.model);
  }

  onsubmit(){
    if(FormControl)
    console.log(this.formVar.value);
  }
}
