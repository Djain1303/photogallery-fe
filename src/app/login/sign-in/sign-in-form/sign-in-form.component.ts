import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  // public model = {
  //   name: '',
  //   email: '',
  //   pass: ''
  // }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  passwordFormControl =  new FormControl('',[
    Validators.required
  ]);

  constructor( ) { }

  ngOnInit() {
  }

}
