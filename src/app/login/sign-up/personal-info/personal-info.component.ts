import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

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

  constructor( ) { }

  ngOnInit() {
  }

}
