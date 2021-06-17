import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calculator3',
  templateUrl: './calculator3.component.html',
  styleUrls: ['./calculator3.component.css'],
})
export class Calculator3Component implements OnInit {
  score1: string = '';
  score2: string = '';
  score3: string = '';
  score4: string = '';
  score5: string = '';
  score6: string = '';
  score7: string = '';
  score: number = 0;
  risk_cat: string = '';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  formGroup = new FormGroup({
    score1: new FormControl('', [Validators.required]),
    score2: new FormControl('', [Validators.required]),
    score3: new FormControl('', [Validators.required]),
    score4: new FormControl('', [Validators.required]),
    score5: new FormControl('', [Validators.required]),
    score6: new FormControl('', [Validators.required]),
    score7: new FormControl('', [Validators.required]),
  });

  reset() {
    // window.location.reload();

    this.formGroup.reset();
    // this.refscore = 0;
    this.score = 0;
    this.risk_cat = '';
  }

  ScoreSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      localStorage.setItem('cal3_detail', JSON.stringify(this.formGroup.value));
      this.score =
        parseInt(this.formGroup.value.score1) +
        parseInt(this.formGroup.value.score2) +
        parseInt(this.formGroup.value.score3) +
        parseInt(this.formGroup.value.score4) +
        parseInt(this.formGroup.value.score5) +
        parseInt(this.formGroup.value.score6) +
        parseInt(this.formGroup.value.score7);
      console.log(this.score);
      localStorage.setItem('cal3_score', JSON.stringify(this.score));

      if (this.score == 0) {
        // this.refscore = 1.13;
        this.risk_cat = '0.4%';
      } else if (this.score == 1) {
        this.risk_cat = '0.6%';
      } else if (this.score == 2) {
        this.risk_cat = '1.0%';
      } else if (this.score == 3) {
        this.risk_cat = '1.7%';
      } else if (this.score == 4) {
        this.risk_cat = '2.9%';
      } else {
        this.risk_cat = '7.2%';
      }
    } else {
      alert('Please fill all details');
    }
  }
  // openDialog() {
  //   let dialogRef = this.dialog.open(DialogPopupComponent);

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
}
