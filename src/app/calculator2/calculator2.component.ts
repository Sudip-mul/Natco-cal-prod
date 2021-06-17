import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import {MatDialog} from '@angular/material/dialog';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';

@Component({
  selector: 'app-calculator2',
  templateUrl: './calculator2.component.html',
  styleUrls: ['./calculator2.component.css']
})
export class Calculator2Component implements OnInit {
  score1: string="";
  score2: string="";
  score3: string="";
  score4: string="";
  score5: string="";
  score: number = 0;
  risk_cat: string = '';
  refscore: number = 0;
  bleeding_per: string = '';
  treatment_rec: string = '';
  
  
  

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
    
  });
  
  reset() {
    // window.location.reload();
    
    this.formGroup.reset();
    // this.refscore = 0;
    this.score = 0;
    this.bleeding_per = '';
    this.risk_cat = '';
    this.treatment_rec = '';
    
     
  }

  ScoreSubmit() {
    if (this.formGroup.valid)
    {
      console.log((this.formGroup.value));
      localStorage.setItem('cal2_detail', JSON.stringify(this.formGroup.value))
      this.score = parseInt(this.formGroup.value.score1) + parseInt(this.formGroup.value.score2) + parseInt(this.formGroup.value.score3) + parseInt(this.formGroup.value.score4) + parseInt(this.formGroup.value.score5) ;
      console.log(this.score);
      localStorage.setItem('cal2_score', JSON.stringify(this.score))

      if(this.score == 0 || this.score == 1 || this.score == 2 || this.score == 3){
        // this.refscore = 1.13;
        this.risk_cat = 'Low';
        this.bleeding_per = '0.76%';
        this.treatment_rec = 'git pull origin master';
      }
      else if (this.score == 4) {
        this.risk_cat = 'Intermediate';
        this.bleeding_per = '2.62%';
        this.treatment_rec = 'Alternatives to warfarin therapy can be considered.';
      }
      else  {
        this.risk_cat = 'High';
        this.bleeding_per = '5.76%';
        this.treatment_rec = 'Alternatives to warfarin therapy can be considered.';
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
