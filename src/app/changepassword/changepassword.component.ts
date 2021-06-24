import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
})
export class ChangepasswordComponent implements OnInit {
  cur_password: string = '';
  new_password: string = '';
  cnf_password: string = '';
  doc_detail: any;
  // hide = true;

  constructor(private login: LoginService) {
    this.doc_detail = localStorage.getItem('doctor_data');
    this.doc_detail = JSON.parse(this.doc_detail);
  }

  ngOnInit(): void {}
  formGroup = new FormGroup({
    cur_password: new FormControl('', [Validators.required]),
    new_password: new FormControl('', [Validators.required]),
    cnf_password: new FormControl('', [Validators.required]),
  });

  changePwd() {
    if (this.formGroup.valid) {
      if (
        this.formGroup.value.new_password != this.formGroup.value.cnf_password
      ) {
        alert('Password is not matching');
      } else {
        this.login
          .changePwd(
            this.doc_detail,
            this.formGroup.value.cur_password,
            this.formGroup.value.new_password
          )
          .subscribe((res) => {
            // console.log(res['res']);
            alert(res['res']);
          });
      }
    }
  }
}
