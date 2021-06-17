import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  patient_id: string;
  name: string ;
  city: string ;
  age: string ;
  bp: string ;
}

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  patient_id: string = '';
  name: string = '';
  city: string = '';
  age: string = '';
  bp: string = '';
  gender: string = '';

  constructor(
    public dialogRef: MatDialogRef<PatientDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit(): void {
  }
  formGroup = new FormGroup({
    patient_id: new FormControl(""),
    name: new FormControl("", [Validators.required]),
    city: new FormControl("", [Validators.required]),
    age: new FormControl("", [Validators.required]),
    bp: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
  });

  submitDet() {
    if (this.formGroup.valid)
    {
      this.dialogRef.close(this.formGroup.value);
      console.log('success')
      // alert("patient detail filled successfully");
    } 
  }

}
