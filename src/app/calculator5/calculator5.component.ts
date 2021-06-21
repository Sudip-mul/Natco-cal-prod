import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calculator5',
  templateUrl: './calculator5.component.html',
  styleUrls: ['./calculator5.component.css'],
})
export class Calculator5Component implements OnInit {
  score1: number = 0;
  score2: string = '';
  score3: number = 0;
  score4: number = 0;
  score5: number = 0;
  score6: string = '';
  score7: number = 0;
  score8: number = 0;
  score: number = 0;
  cvd_risk: string = '-';
  heart_age: string = '-';
  patgender: string = 'Men/Women';

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
    score8: new FormControl('', [Validators.required]),
  });

  reset() {
    // window.location.reload();

    this.formGroup.reset();
    // this.refscore = 0;
    this.score = 0;
    this.cvd_risk = '-';
    this.heart_age = '-';
    this.patgender = 'Men/Women';
  }

  ScoreSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value.score1);
      if (this.formGroup.value.score2 == 'Men') {
        if (this.formGroup.value.score1 <= 34) {
          this.score1 = 0;
        } else if (
          this.formGroup.value.score1 >= 35 &&
          this.formGroup.value.score1 <= 39
        ) {
          this.score1 = 2;
        } else if (
          this.formGroup.value.score1 >= 40 &&
          this.formGroup.value.score1 <= 44
        ) {
          this.score1 = 5;
        } else if (
          this.formGroup.value.score1 >= 45 &&
          this.formGroup.value.score1 <= 49
        ) {
          this.score1 = 6;
        } else if (
          this.formGroup.value.score1 >= 50 &&
          this.formGroup.value.score1 <= 54
        ) {
          this.score1 = 8;
        } else if (
          this.formGroup.value.score1 >= 55 &&
          this.formGroup.value.score1 <= 59
        ) {
          this.score1 = 10;
        } else if (
          this.formGroup.value.score1 >= 60 &&
          this.formGroup.value.score1 <= 64
        ) {
          this.score1 = 11;
        } else if (
          this.formGroup.value.score1 >= 65 &&
          this.formGroup.value.score1 <= 69
        ) {
          this.score1 = 12;
        } else if (
          this.formGroup.value.score1 >= 70 &&
          this.formGroup.value.score1 <= 74
        ) {
          this.score1 = 14;
        } else {
          this.score1 = 15;
        }

        if (this.formGroup.value.score5 >= 60) {
          this.score5 = -2;
        } else if (
          this.formGroup.value.score5 >= 50 &&
          this.formGroup.value.score5 <= 59
        ) {
          this.score5 = -1;
        } else if (
          this.formGroup.value.score5 >= 45 &&
          this.formGroup.value.score5 <= 49
        ) {
          this.score5 = 0;
        } else if (
          this.formGroup.value.score5 >= 35 &&
          this.formGroup.value.score5 <= 44
        ) {
          this.score5 = 1;
        } else {
          this.score5 = 2;
        }

        if (this.formGroup.value.score4 < 160) {
          this.score4 = 0;
        } else if (
          this.formGroup.value.score4 >= 160 &&
          this.formGroup.value.score4 <= 199
        ) {
          this.score4 = 1;
        } else if (
          this.formGroup.value.score4 >= 200 &&
          this.formGroup.value.score4 <= 239
        ) {
          this.score4 = 2;
        } else if (
          this.formGroup.value.score4 >= 240 &&
          this.formGroup.value.score4 <= 279
        ) {
          this.score4 = 3;
        } else {
          this.score4 = 4;
        }

        if (this.formGroup.value.score6 == 'No') {
          if (this.formGroup.value.score3 < 120) {
            this.score3 = -2;
          } else if (
            this.formGroup.value.score3 >= 120 &&
            this.formGroup.value.score3 <= 129
          ) {
            this.score3 = 0;
          } else if (
            this.formGroup.value.score3 >= 130 &&
            this.formGroup.value.score3 <= 139
          ) {
            this.score3 = 1;
          } else if (
            this.formGroup.value.score3 >= 140 &&
            this.formGroup.value.score3 <= 159
          ) {
            this.score3 = 2;
          } else {
            this.score3 = 3;
          }
        } else {
          if (this.formGroup.value.score3 < 120) {
            this.score3 = 0;
          } else if (
            this.formGroup.value.score3 >= 120 &&
            this.formGroup.value.score3 <= 129
          ) {
            this.score3 = 2;
          } else if (
            this.formGroup.value.score3 >= 130 &&
            this.formGroup.value.score3 <= 139
          ) {
            this.score3 = 3;
          } else if (
            this.formGroup.value.score3 >= 140 &&
            this.formGroup.value.score3 <= 159
          ) {
            this.score3 = 4;
          } else {
            this.score3 = 5;
          }
        }

        if (this.formGroup.value.score7 == 0) {
          this.score7 = 0;
        } else {
          this.score7 = 4;
        }

        if (this.formGroup.value.score8 == 0) {
          this.score8 = 0;
        } else {
          this.score8 = 3;
        }
      } else {
        if (this.formGroup.value.score1 <= 34) {
          this.score1 = 0;
        } else if (
          this.formGroup.value.score1 >= 35 &&
          this.formGroup.value.score1 <= 39
        ) {
          this.score1 = 2;
        } else if (
          this.formGroup.value.score1 >= 40 &&
          this.formGroup.value.score1 <= 44
        ) {
          this.score1 = 4;
        } else if (
          this.formGroup.value.score1 >= 45 &&
          this.formGroup.value.score1 <= 49
        ) {
          this.score1 = 5;
        } else if (
          this.formGroup.value.score1 >= 50 &&
          this.formGroup.value.score1 <= 54
        ) {
          this.score1 = 7;
        } else if (
          this.formGroup.value.score1 >= 55 &&
          this.formGroup.value.score1 <= 59
        ) {
          this.score1 = 8;
        } else if (
          this.formGroup.value.score1 >= 60 &&
          this.formGroup.value.score1 <= 64
        ) {
          this.score1 = 9;
        } else if (
          this.formGroup.value.score1 >= 65 &&
          this.formGroup.value.score1 <= 69
        ) {
          this.score1 = 10;
        } else if (
          this.formGroup.value.score1 >= 70 &&
          this.formGroup.value.score1 <= 74
        ) {
          this.score1 = 11;
        } else {
          this.score1 = 12;
        }

        if (this.formGroup.value.score5 >= 60) {
          this.score5 = -2;
        } else if (
          this.formGroup.value.score5 >= 50 &&
          this.formGroup.value.score5 <= 59
        ) {
          this.score5 = -1;
        } else if (
          this.formGroup.value.score5 >= 45 &&
          this.formGroup.value.score5 <= 49
        ) {
          this.score5 = 0;
        } else if (
          this.formGroup.value.score5 >= 35 &&
          this.formGroup.value.score5 <= 44
        ) {
          this.score5 = 1;
        } else {
          this.score5 = 2;
        }

        if (this.formGroup.value.score4 < 160) {
          this.score4 = 0;
        } else if (
          this.formGroup.value.score4 >= 160 &&
          this.formGroup.value.score4 <= 199
        ) {
          this.score4 = 1;
        } else if (
          this.formGroup.value.score4 >= 200 &&
          this.formGroup.value.score4 <= 239
        ) {
          this.score4 = 3;
        } else if (
          this.formGroup.value.score4 >= 240 &&
          this.formGroup.value.score4 <= 279
        ) {
          this.score4 = 4;
        } else {
          this.score4 = 5;
        }

        if (this.formGroup.value.score6 == 'No') {
          if (this.formGroup.value.score3 < 120) {
            this.score3 = -3;
          } else if (
            this.formGroup.value.score3 >= 120 &&
            this.formGroup.value.score3 <= 129
          ) {
            this.score3 = 0;
          } else if (
            this.formGroup.value.score3 >= 130 &&
            this.formGroup.value.score3 <= 139
          ) {
            this.score3 = 1;
          } else if (
            this.formGroup.value.score3 >= 140 &&
            this.formGroup.value.score3 <= 149
          ) {
            this.score3 = 2;
          } else if (
            this.formGroup.value.score3 >= 150 &&
            this.formGroup.value.score3 <= 159
          ) {
            this.score3 = 4;
          } else {
            this.score3 = 5;
          }
        } else {
          if (this.formGroup.value.score3 < 120) {
            this.score3 = -1;
          } else if (
            this.formGroup.value.score3 >= 120 &&
            this.formGroup.value.score3 <= 129
          ) {
            this.score3 = 2;
          } else if (
            this.formGroup.value.score3 >= 130 &&
            this.formGroup.value.score3 <= 139
          ) {
            this.score3 = 3;
          } else if (
            this.formGroup.value.score3 >= 140 &&
            this.formGroup.value.score3 <= 149
          ) {
            this.score3 = 5;
          } else if (
            this.formGroup.value.score3 >= 150 &&
            this.formGroup.value.score3 <= 159
          ) {
            this.score3 = 6;
          } else {
            this.score3 = 7;
          }
        }

        if (this.formGroup.value.score7 == 0) {
          this.score7 = 0;
        } else {
          this.score7 = 3;
        }

        if (this.formGroup.value.score8 == 0) {
          this.score8 = 0;
        } else {
          this.score8 = 4;
        }
      }

      console.log(this.formGroup.value);
      localStorage.setItem('cal5_detail', JSON.stringify(this.formGroup.value));
      this.score =
        this.score1 +
        this.score3 +
        this.score4 +
        this.score5 +
        // this.score6 +
        this.score7 +
        this.score8;
      // localStorage.setItem('cal5_score', JSON.stringify(this.score));

      this.patgender = this.formGroup.value.score2;

      if (this.formGroup.value.score2 == 'Men') {
        if (this.score <= -3) {
          // this.refscore = 1.13;
          this.cvd_risk = '<1';
          this.heart_age = '<30';
        } else if (this.score == -2) {
          this.cvd_risk = '1.1';
          this.heart_age = '<30';
        } else if (this.score == -1) {
          this.cvd_risk = '1.4';
          this.heart_age = '<30';
        } else if (this.score == 0) {
          this.cvd_risk = '1.6';
          this.heart_age = '30';
        } else if (this.score == 1) {
          this.cvd_risk = '1.9';
          this.heart_age = '32';
        } else if (this.score == 2) {
          this.cvd_risk = '2.3';
          this.heart_age = '34';
        } else if (this.score == 3) {
          this.cvd_risk = '2.8';
          this.heart_age = '36';
        } else if (this.score == 4) {
          this.cvd_risk = '3.3';
          this.heart_age = '38';
        } else if (this.score == 5) {
          this.cvd_risk = '3.9';
          this.heart_age = '40';
        } else if (this.score == 6) {
          this.cvd_risk = '4.7';
          this.heart_age = '42';
        } else if (this.score == 7) {
          this.cvd_risk = '5.6';
          this.heart_age = '45';
        } else if (this.score == 8) {
          this.cvd_risk = '6.7';
          this.heart_age = '48';
        } else if (this.score == 9) {
          this.cvd_risk = '7.9';
          this.heart_age = '51';
        } else if (this.score == 10) {
          this.cvd_risk = '9.4';
          this.heart_age = '54';
        } else if (this.score == 11) {
          this.cvd_risk = '11.2';
          this.heart_age = '57';
        } else if (this.score == 12) {
          this.cvd_risk = '13.2';
          this.heart_age = '60';
        } else if (this.score == 13) {
          this.cvd_risk = '15.6';
          this.heart_age = '64';
        } else if (this.score == 14) {
          this.cvd_risk = '18.4';
          this.heart_age = '68';
        } else if (this.score == 15) {
          this.cvd_risk = '21.6';
          this.heart_age = '72';
        } else if (this.score == 16) {
          this.cvd_risk = '25.3';
          this.heart_age = '76';
        } else if (this.score == 17) {
          this.cvd_risk = '29.4';
          this.heart_age = '80';
        } else {
          this.cvd_risk = '>30';
          this.heart_age = '80';
        }
      } else {
        if (this.score <= -2) {
          this.cvd_risk = '<1';
          this.heart_age = '<30';
        } else if (this.score == -1) {
          this.cvd_risk = '1.0';
          this.heart_age = '<30';
        } else if (this.score == 0) {
          this.cvd_risk = '1.2';
          this.heart_age = '<30';
        } else if (this.score == 1) {
          this.cvd_risk = '1.5';
          this.heart_age = '31';
        } else if (this.score == 2) {
          this.cvd_risk = '1.7';
          this.heart_age = '34';
        } else if (this.score == 3) {
          this.cvd_risk = '2.0';
          this.heart_age = '36';
        } else if (this.score == 4) {
          this.cvd_risk = '2.4';
          this.heart_age = '39';
        } else if (this.score == 5) {
          this.cvd_risk = '2.8';
          this.heart_age = '42';
        } else if (this.score == 6) {
          this.cvd_risk = '3.3';
          this.heart_age = '45';
        } else if (this.score == 7) {
          this.cvd_risk = '3.9';
          this.heart_age = '48';
        } else if (this.score == 8) {
          this.cvd_risk = '4.5';
          this.heart_age = '51';
        } else if (this.score == 9) {
          this.cvd_risk = '5.3';
          this.heart_age = '55';
        } else if (this.score == 10) {
          this.cvd_risk = '6.3';
          this.heart_age = '59';
        } else if (this.score == 11) {
          this.cvd_risk = '7.3';
          this.heart_age = '64';
        } else if (this.score == 12) {
          this.cvd_risk = '8.6';
          this.heart_age = '68';
        } else if (this.score == 13) {
          this.cvd_risk = '10.0';
          this.heart_age = '73';
        } else if (this.score == 14) {
          this.cvd_risk = '11.7';
          this.heart_age = '79';
        } else if (this.score == 15) {
          this.cvd_risk = '13.7';
          this.heart_age = '>80';
        } else if (this.score == 16) {
          this.cvd_risk = '15.9';
          this.heart_age = '>80';
        } else if (this.score == 17) {
          this.cvd_risk = '18.5';
          this.heart_age = '>80';
        } else if (this.score == 18) {
          this.cvd_risk = '21.5';
          this.heart_age = '>80';
        } else if (this.score == 19) {
          this.cvd_risk = '24.8';
          this.heart_age = '>80';
        } else if (this.score == 20) {
          this.cvd_risk = '28.5';
          this.heart_age = '>80';
        } else {
          this.cvd_risk = '>30';
          this.heart_age = '>80';
        }
      }
      let final_score = {
        'CVD Risk for Women/Men (%)': this.cvd_risk,
        'Heart Age/Vascular Age for Women/Men (years)': this.heart_age,
      };
      localStorage.setItem('cal5_score', JSON.stringify(final_score));
    } else {
      alert('Please fill all details');
    }
  }
}
