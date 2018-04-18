import { Injectable } from '@angular/core';

@Injectable()

export class LoginDataService {

  
  constructor() { }

  setPersonalFormData(data){
    localStorage.setItem("user", data.name);
    localStorage.setItem("email",  data.email);
    localStorage.setItem("pass",  data.pass);
    window.alert("User Registered Successfully, Please login to continue");
  }

  getUserDetails(){
    var loggedInUser = {
      email : localStorage.getItem("email"),
      pass : localStorage.getItem("pass")
    }
    return loggedInUser;
  }
}