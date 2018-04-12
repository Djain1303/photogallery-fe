import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {MatInputModule, MatFormFieldControl} from '@angular/material';
import { AppComponent } from './app.component';
import { MainComponent,  } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignInFormComponent } from './login/sign-in/sign-in-form/sign-in-form.component';
import { PersonalInfoComponent } from './login/sign-up/personal-info/personal-info.component';

import { LoginDataService } from './login-data.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    SignUpComponent,
    SignInComponent,
    SignInFormComponent,
    PersonalInfoComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule
    
  ],
  providers: [LoginDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
