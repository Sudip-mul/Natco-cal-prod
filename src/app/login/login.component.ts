import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginService } from '../services/login.service';
// import { MyserviceService } from './myservice.service';

import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private route: Router, private login: LoginService) {}

  ngOnInit(): void {}
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  logInUser() {
    if (this.formGroup.valid) {
      if (this.formGroup.value.password == '123456') {
        console.log(
          'welcome to dashboard, your email is = ' + this.formGroup.value.email
        );

        // username= this.formGroup.value.email,
        // password= this.formGroup.value.password,
        this.login
          .getAll(this.formGroup.value.email, this.formGroup.value.password)
          .subscribe((res) => {
            console.log(res);
          });

        this.route.navigate(['./calculator1']);
        // alert("welcome to dashboard")
        localStorage.setItem(
          'doctor_data',
          JSON.stringify(this.formGroup.value.email)
        );
        localStorage.setItem('loggedin', 'true');
      } else {
        console.log('unauthorised user');
        alert('Please enter correct password');
      }
    }
  }
}
