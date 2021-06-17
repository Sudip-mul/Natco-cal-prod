import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import {MatDialog} from '@angular/material/dialog';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';
// import { PatientDetailComponent } from './patient-detail/patient-detail.component';

@Component({
  selector: 'app-calculator1',
  templateUrl: './calculator1.component.html',
  styleUrls: ['./calculator1.component.css']
})
export class Calculator1Component implements OnInit {
  score1: string="";
  score2: string="";
  score3: string="";
  score4: string="";
  score5: string="";
  score6: string="";
  score7: string="";
  score8: string="";
  score9: string="";
  score: number = 0;
  refscore: number = 0;
  
  
  

  constructor(public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
  }
  
  formGroup = new FormGroup({

    
    score1: new FormControl("", [Validators.required]),
    score2: new FormControl("", [Validators.required]),
    score3: new FormControl("", [Validators.required]),
    score4: new FormControl("", [Validators.required]),
    score5: new FormControl("", [Validators.required]),
    score6: new FormControl("", [Validators.required]),
    score7: new FormControl("", [Validators.required]),
    score8: new FormControl("", [Validators.required]),
    score9: new FormControl("", [Validators.required]),
  });
  
  reset() {
    // window.location.reload();
    
    this.formGroup.reset();
    this.refscore = 0;
    this.score = 0;
    
     
  }

  ScoreSubmit() {
    if (this.formGroup.valid)
    {
      console.log((this.formGroup.value));
      localStorage.setItem('cal1_detail', JSON.stringify(this.formGroup.value))
      this.score = parseInt(this.formGroup.value.score1) + parseInt(this.formGroup.value.score2) + parseInt(this.formGroup.value.score3) + parseInt(this.formGroup.value.score4) + parseInt(this.formGroup.value.score5) + parseInt(this.formGroup.value.score6) + parseInt(this.formGroup.value.score7) + parseInt(this.formGroup.value.score8) + parseInt(this.formGroup.value.score9);
      console.log(this.score);
      localStorage.setItem('cal1_score', JSON.stringify(this.score))

      if(this.score == 0){
        this.refscore = 1.13;
      }
      else if (this.score == 1) {
        this.refscore = 1.02;
      }
      else if (this.score == 2) {
        this.refscore = 1.88;
      }
      else if (this.score == 3) {
        this.refscore = 3.74;
      }
      else if (this.score == 4) {
        this.refscore = 8.70;
      }
      else{
        this.refscore = 12.5;
      }

      
    } 
    
    
    else
    {
      alert('Please fill all details');
    }

  }
  
  openDialog() {
    let dialogRef = this.dialog.open(DialogPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

}
