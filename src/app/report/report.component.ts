import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  patient_id: string = '';
  name: string = '';
  age: string = '';
  gender: string = '';
  city: string = '';
  bp: string = '';
  detail: any;
  doc_detail: any;

  cal1_detail: any;
  cal1_score: any;
  score1: string = '';
  score2: string = '';
  score3: string = '';
  score4: string = '';
  score5: string = '';
  score6: string = '';
  score7: string = '';
  score8: string = '';
  score9: string = '';
  // score: number = 0;
  refscore: number = 0;

  constructor() {
    //doctor detail
    this.doc_detail = localStorage.getItem('doctor_data');
    this.doc_detail = JSON.parse(this.doc_detail);

    //patient detail
    this.detail = localStorage.getItem('patient_data');
    this.detail = JSON.parse(this.detail);
    // console.log(this.doc_detail)
    this.patient_id = this.detail['patient_id'];
    this.name = this.detail['name'];
    this.age = this.detail['age'];
    this.gender = this.detail['gender'];
    this.city = this.detail['city'];
    this.bp = this.detail['bp'];
    // console.log(this.patient_id)
    // console.log(this.detail.patient_id)

    //calculator1
    this.cal1_detail = localStorage.getItem('cal1_detail');
    this.cal1_score = localStorage.getItem('cal1_score');
    this.cal1_detail = JSON.parse(this.cal1_detail);
    this.cal1_score = JSON.parse(this.cal1_score);

    if (this.cal1_detail['score1'] == 1) {
      this.score1 = 'Yes';
    } else {
      this.score1 = 'No';
    }
    if (this.cal1_detail['score2'] == 1) {
      this.score2 = 'Yes';
    } else {
      this.score2 = 'No';
    }
    if (this.cal1_detail['score3'] == 1) {
      this.score3 = 'Yes';
    } else {
      this.score3 = 'No';
    }
    if (this.cal1_detail['score4'] == 1) {
      this.score4 = 'Yes';
    } else {
      this.score4 = 'No';
    }
    if (this.cal1_detail['score5'] == 1) {
      this.score5 = 'Yes';
    } else {
      this.score5 = 'No';
    }
    if (this.cal1_detail['score6'] == 1) {
      this.score6 = 'Yes';
    } else {
      this.score6 = 'No';
    }
    if (this.cal1_detail['score7'] == 1) {
      this.score7 = 'Yes';
    } else {
      this.score7 = 'No';
    }
    if (this.cal1_detail['score8'] == 1) {
      this.score8 = 'Yes';
    } else {
      this.score8 = 'No';
    }
    if (this.cal1_detail['score9'] == 1) {
      this.score9 = 'Yes';
    } else {
      this.score9 = 'No';
    }


    // this.score1 = this.cal1_detail['score1']
    // this.score2 = this.cal1_detail['score2'];
    // this.score3 = this.cal1_detail['score3'];
    // this.score4 = this.cal1_detail['score4'];
    // this.score5 = this.cal1_detail['score5'];
    // this.score6 = this.cal1_detail['score6'];
    // this.score7 = this.cal1_detail['score7'];
    // this.score8 = this.cal1_detail['score8'];
    // this.score9 = this.cal1_detail['score9'];

    if (this.cal1_score == 0) {
      this.refscore = 1.13;
    } else if (this.cal1_score == 1) {
      this.refscore = 1.02;
    } else if (this.cal1_score == 2) {
      this.refscore = 1.88;
    } else if (this.cal1_score == 3) {
      this.refscore = 3.74;
    } else if (this.cal1_score == 4) {
      this.refscore = 8.7;
    } else {
      this.refscore = 12.5;
    }
  }

  

  ngOnInit(): void {}
}
