import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import{ LoginDataService } from '../../../login-data.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  formVar: FormGroup;

  public model = {
    email: '',
    pass: ''
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  passwordFormControl =  new FormControl('',[
    Validators.required
  ]);

  constructor( private fb: FormBuilder, 
  private lds: LoginDataService, 
  private router: Router) { }

  ngOnInit() {
    this.formVar = this.fb.group(this.model);
  }

  onSubmit(){
    if(this.emailFormControl.status === "VALID" && this.passwordFormControl.status === "VALID"){
      var loggedInUser = this.lds.getUserDetails();
      if(loggedInUser.email === this.model.email && loggedInUser.pass === this.model.pass)
        this.router.navigate(['/home']);
      else
        window.alert("Invalid Email or Password");
    }  
  }

}
