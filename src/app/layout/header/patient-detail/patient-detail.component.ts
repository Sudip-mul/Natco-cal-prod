import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

export interface DialogData {
  patient_id: string;
  name: string;
  city: string;
  age: string;
  bp: string;
}

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css'],
})
export class PatientDetailComponent implements OnInit {
  patient_id: string = '';
  name: string = '';
  city: string = '';
  age: string = '';
  bp: string = '';
  gender: string = '';
  doc_detail: any;

  constructor(
    private insert: LoginService,
    public dialogRef: MatDialogRef<PatientDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    if (localStorage.getItem('doctor_data') != null) {
      this.doc_detail = localStorage.getItem('doctor_data');
      this.doc_detail = JSON.parse(this.doc_detail);
    }
  }

  ngOnInit(): void {}
  formGroup = new FormGroup({
    patient_id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    bp: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  submitDet() {
    if (this.formGroup.valid) {
      this.insert
        .insertpatient(
          this.doc_detail,
          this.formGroup.value.patient_id,
          this.formGroup.value.name,
          this.formGroup.value.age,
          this.formGroup.value.gender,
          this.formGroup.value.city,
          this.formGroup.value.bp
        )
        .subscribe((res) => {
          console.log(res);
        });
      this.dialogRef.close(this.formGroup.value);
      console.log('success');
      // alert("patient detail filled successfully");
    }
  }
}
