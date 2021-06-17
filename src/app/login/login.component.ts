import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
// import { MyserviceService } from './myservice.service';

import { FormGroup, Validators, FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  formGroup = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  logInUser() {
    if (this.formGroup.valid)
    {
      if (this.formGroup.value.password == "123456")
      {
        console.log("welcome to dashboard, your email is = " + this.formGroup.value.email)
        
        this.route.navigate(['./calculator1'])
        // alert("welcome to dashboard")
        localStorage.setItem('doctor_data',JSON.stringify(this.formGroup.value.email))
      
      }
      else
      {
        console.log("unauthorised user")
        alert("Please enter correct password")
      }
    }
    }
}
