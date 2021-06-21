import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calculator6',
  templateUrl: './calculator6.component.html',
  styleUrls: ['./calculator6.component.css'],
})
export class Calculator6Component implements OnInit {
  score1: number = 0;
  score2: number = 0;
  score3: number = 0;
  score: number = 0;
  imageurl: any = 'assets/image/g1.jpg';

  risk_group: string = '-';
  risk_critical: string = '-';

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  formGroup = new FormGroup({
    score1: new FormControl('', [Validators.required]),
    score2: new FormControl('', [Validators.required]),
    score3: new FormControl('', [Validators.required]),
  });

  reset() {
    // window.location.reload();

    this.formGroup.reset();
    // this.refscore = 0;
    this.score = 0;
    this.risk_group = '-';
    this.risk_critical = '-';
  }

  ScoreSubmit() {
    if (this.formGroup.valid) {
      if (this.formGroup.value.score1 <= 22) {
        this.score1 = 0;
      } else if (
        this.formGroup.value.score1 > 22 &&
        this.formGroup.value.score1 < 29
      ) {
        this.score1 = 1;
      } else {
        this.score1 = 2;
      }

      if (this.formGroup.value.score2 > 92) {
        this.score2 = 0;
      } else if (
        this.formGroup.value.score2 > 88 &&
        this.formGroup.value.score2 < 92
      ) {
        this.score2 = 2;
      } else {
        this.score2 = 5;
      }

      if (this.formGroup.value.score3 < 3) {
        this.score3 = 0;
      } else if (
        this.formGroup.value.score3 > 2 &&
        this.formGroup.value.score3 < 5
      ) {
        this.score3 = 4;
      } else {
        this.score3 = 5;
      }

      console.log(this.formGroup.value);
      localStorage.setItem('cal6_detail', JSON.stringify(this.formGroup.value));
      this.score = this.score1 + this.score2 + this.score3;
      console.log(this.score);
      // localStorage.setItem('cal6_score', JSON.stringify(this.score));

      if (this.score <= 3) {
        // this.refscore = 1.13;
        this.risk_group = 'Low';
        this.risk_critical = '4%';
      } else if (this.score > 3 && this.score < 7) {
        this.risk_group = 'Low-Intermediate';
        this.risk_critical = '30%';
      } else if (this.score > 6 && this.score < 10) {
        this.risk_group = 'High-Intermediate';
        this.risk_critical = '44%';
      } else {
        this.risk_group = 'High';
        this.risk_critical = '57%';
      }

      if (this.score < 3) {
        this.imageurl = 'assets/image/first.jpg';
      } else if (this.score >= 3 && this.score < 6) {
        this.imageurl = 'assets/image/second.jpg';
      } else if (this.score >= 6 && this.score < 9) {
        this.imageurl = 'assets/image/third.jpg';
      } else if (this.score >= 9) {
        this.imageurl = 'assets/image/fourth.jpg';
      }

      let final_score = {
        'qCSI Score': this.score,
        'Risk group	': this.risk_group,
        'Risk of critical illness* at 24 hrs': this.risk_critical,
      };
      localStorage.setItem('cal6_score', JSON.stringify(final_score));
    } else {
      alert('Please fill all details');
    }
  }
}
