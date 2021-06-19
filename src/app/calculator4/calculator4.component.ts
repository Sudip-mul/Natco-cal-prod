import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calculator4',
  templateUrl: './calculator4.component.html',
  styleUrls: ['./calculator4.component.css'],
})
export class Calculator4Component implements OnInit {
  score1: string = '';
  score2: string = '';
  score3: string = '';
  score4: string = '';
  score5: string = '';
  score6: string = '';
  score7: string = '';
  score8: string = '';
  stroke_risk: number = 0;
  score: number = 0;
  risk_level: string = '-';
  throm_event_rate: string = '-';
  treat_recom: string = '-';

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
    this.risk_level = '-';
    this.throm_event_rate = '-';
    this.treat_recom = '-';
    this.stroke_risk = 0;
  }

  ScoreSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      localStorage.setItem('cal4_detail', JSON.stringify(this.formGroup.value));
      this.score =
        parseInt(this.formGroup.value.score1) +
        parseInt(this.formGroup.value.score2) +
        parseInt(this.formGroup.value.score3) +
        parseInt(this.formGroup.value.score4) +
        parseInt(this.formGroup.value.score5) +
        parseInt(this.formGroup.value.score6) +
        parseInt(this.formGroup.value.score7) +
        parseInt(this.formGroup.value.score8);
      console.log(this.score);
      localStorage.setItem('cal4_score', JSON.stringify(this.score));

      if (this.score == 0) {
        // this.refscore = 1.13;
        this.risk_level = 'Low';
        this.throm_event_rate = '0%';
        this.treat_recom = 'No treatment (preferred) or aspirin 75-325 mg/day';
      } else if (this.score == 1) {
        this.risk_level = 'Intermediate';
        this.throm_event_rate = '0.46-2.8%';
        this.treat_recom =
          'VKA with INR goal 2.0–3.0 (preferred) (Class 1, level A) or dabigatran may be an option for specific populations (preferred over aspirin) or aspirin 81–325 mg/day (Class 1, level B)';
      } else {
        this.risk_level = 'High';
        this.throm_event_rate = '3.0-5.0%';
        this.treat_recom = 'VKA with INR goal 2.0–3.0';
      }

      if (this.score == 0)
      {
        this.stroke_risk = 0;
      } else if (this.score == 1)
      {
        this.stroke_risk = 1.3;
      } else if (this.score == 2)
      {
        this.stroke_risk = 2.2;
      } else if (this.score == 3)
      {
        this.stroke_risk = 3.2;
      } else if (this.score == 4)
      {
        this.stroke_risk = 4.0;
      } else if (this.score == 5)
      {
        this.stroke_risk = 6.7;
      } else if (this.score == 6)
      {
        this.stroke_risk = 9.8;
      } else if (this.score == 7)
      {
        this.stroke_risk = 9.6;
      } else if (this.score == 8)
      {
        this.stroke_risk = 6.7;
      } else
      {
        this.stroke_risk = 15.2;
      }

    } else {
      alert('Please fill all details');
    }
  }
}
