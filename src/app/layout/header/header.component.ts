import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import jspdf from 'jspdf';
import { DialogPopupComponent } from 'src/app/calculator1/dialog-popup/dialog-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  name: string = '';
  patient_id: string = '';
  age: string = '';
  city: string = '';
  bp: string = '';
  gender: string = '';

  name_pdf: string = '';
  patient_id_pdf: string = '';
  age_pdf: string = '';
  city_pdf: string = '';
  bp_pdf: string = '';
  gender_pdf: string = '';

  undefined: any;

  doc = new jspdf('p', 'pt', 'a4');
  L1 = 40;
  L2 = 190;
  L3 = 260;
  L4 = 430;
  H1: number = 110;
  templength: any;
  charlength: any;
  newcharlen: any;

  calcname: any;
  calcparams: any;
  calcvalues: any;

  detail: any;
  doc_detail: any;

  // Calculators parameter
  cal1_detail: any;
  cal2_detail: any;
  cal3_detail: any;
  cal4_detail: any;
  cal5_detail: any;
  cal6_detail: any;
  cal7_detail: any;

  cal1_score: any;
  cal2_score: any;
  cal3_score: any;
  cal4_score: any;
  cal5_score: any;
  cal6_score: any;
  cal7_score: any;

  // Calculators parameters array = [];
  cal1_array: string[] = [];
  cal2_array: string[] = [];
  cal3_array: string[] = [];
  cal4_array: string[] = [];
  cal5_array: string[] = [];
  cal6_array: string[] = [];
  cal7_array: string[] = [];

  allcalcs: any = [];

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @Output() pdf: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, public dialog: MatDialog) {}

  calllocalstorage() {
    //doctor detail
    this.doc_detail = localStorage.getItem('doctor_data');
    this.doc_detail = JSON.parse(this.doc_detail);

    //patient detail
    this.detail = localStorage.getItem('patient_data');
    this.detail = JSON.parse(this.detail);

    if (localStorage.getItem('patient_data') != null) {
      this.patient_id_pdf = this.detail['patient_id'];
      this.name_pdf = this.detail['name'];
      this.age_pdf = this.detail['age'];
      this.gender_pdf = this.detail['gender'];
      this.city_pdf = this.detail['city'];
      this.bp_pdf = this.detail['bp'];
    } else {
      console.log('Patient details are empty');
    }

    //Calculator 1 detail pre load
    let tempC = JSON.parse(localStorage.getItem('cal1_detail') || '{}');
    // this.cal1_array = []
    if (localStorage.getItem('cal1_detail') != null) {
      this.cal1_detail = tempC;
      for (let key in this.cal1_detail) {
        this.cal1_array.push(this.cal1_detail[key].toString());
      }
      this.cal1_score = JSON.parse(localStorage.getItem('cal1_score') || '{}');
    } else {
      console.log('Calculator 1 is empty');
    }
    //Calculator 2 detail pre load
    tempC = JSON.parse(localStorage.getItem('cal2_detail') || '{}');
    if (localStorage.getItem('cal2_detail') != null) {
      this.cal2_detail = tempC;
      for (let key in this.cal2_detail) {
        this.cal2_array.push(this.cal2_detail[key].toString());
      }
      this.cal2_score = JSON.parse(localStorage.getItem('cal2_score') || '{}');
      // tempC = JSON.parse(localStorage.getItem('cal2_score') || '{}');
      // this.cal2_score = tempC;
      // for (let key in this.cal2_score) {
      //   this.cal2_score_array.push(this.cal2_score[key]);
      // }
    } else {
      console.log('Calculator 2 is empty');
    }
    //Calculator 3 detail pre load
    tempC = JSON.parse(localStorage.getItem('cal3_detail') || '{}');
    if (localStorage.getItem('cal3_detail') != null) {
      this.cal3_detail = tempC;
      for (let key in this.cal3_detail) {
        this.cal3_array.push(this.cal3_detail[key].toString());
      }
      this.cal3_score = JSON.parse(localStorage.getItem('cal3_score') || '{}');

      // tempC = JSON.parse(localStorage.getItem('cal2_score') || '{}');
      // this.cal2_score = tempC;
      // for (let key in this.cal2_score) {
      //   this.cal2_score_array.push(this.cal2_score[key]);
      // }
    } else {
      console.log('Calculator 3 is empty');
    }
    //Calculator 4 detail pre load
    tempC = JSON.parse(localStorage.getItem('cal4_detail') || '{}');
    if (localStorage.getItem('cal4_detail') != null) {
      this.cal4_detail = tempC;
      for (let key in this.cal4_detail) {
        this.cal4_array.push(this.cal4_detail[key].toString());
      }
      this.cal4_score = JSON.parse(localStorage.getItem('cal4_score') || '{}');
    } else {
      console.log('Calculator 4 is empty');
    }
    //Calculator 5 detail pre load
    tempC = JSON.parse(localStorage.getItem('cal5_detail') || '{}');
    if (localStorage.getItem('cal5_detail') != null) {
      this.cal5_detail = tempC;
      // console.log('from here...');
      for (let key in this.cal5_detail) {
        // console.log(typeof this.cal5_detail[key].toString());
        this.cal5_array.push(this.cal5_detail[key].toString());
      }
      this.cal5_score = JSON.parse(localStorage.getItem('cal5_score') || '{}');
    } else {
      console.log('Calculator 5 is empty');
    }
    //Calculator 6 detail pre load
    tempC = JSON.parse(localStorage.getItem('cal6_detail') || '{}');
    if (localStorage.getItem('cal6_detail') != null) {
      this.cal6_detail = tempC;
      for (let key in this.cal6_detail) {
        this.cal6_array.push(this.cal6_detail[key].toString());
      }
      this.cal6_score = JSON.parse(localStorage.getItem('cal6_score') || '{}');
    } else {
      console.log('Calculator 6 is empty');
    }
    //Calculator 7 detail pre load
    tempC = JSON.parse(localStorage.getItem('cal7_detail') || '{}');
    let checktype: any;
    if (localStorage.getItem('cal7_detail') != null) {
      this.cal7_detail = tempC;
      for (let key in this.cal7_detail) {
        checktype = typeof this.cal7_detail[key];
        if (checktype != 'object') {
          this.cal7_array.push(this.cal7_detail[key].toString());
        } else {
          this.cal7_array.push('-');
        }
      }
      this.cal7_score = JSON.parse(localStorage.getItem('cal7_score') || '{}');
    } else {
      console.log('Calculator 7 is empty');
    }
  }

  ngOnInit(): void {
    this.calllocalstorage();
  }

  maintitle() {
    this.doc.setFontSize(18);
    this.doc.setFont('bold');
    this.doc.setTextColor(112, 112, 112);
  }

  subtitles() {
    this.doc.setFontSize(15);
    this.doc.setFont('bold');
    this.doc.setTextColor(0, 91, 170);
  }

  textinside() {
    this.doc.setFontSize(10);
    this.doc.setFont('normal');
    this.doc.setTextColor(112, 112, 112);
  }

  patientdetails() {
    this.subtitles();
    this.doc.text('Patient details', this.L1, 80);

    // console.log(this.patient_id);

    this.textinside();
    this.doc.text('Patient ID:', this.L1, this.H1);
    this.doc.text(this.patient_id_pdf, this.L2, this.H1);

    this.doc.text('Patient name:', this.L3, this.H1);
    this.doc.text(this.name_pdf, this.L4, this.H1);

    this.H1 = this.H1 + 20;

    this.doc.text('Age:', this.L1, this.H1);
    this.doc.text(this.age_pdf, this.L2, this.H1);

    this.doc.text('Gender:', this.L3, this.H1);
    this.doc.text(this.gender_pdf, this.L4, this.H1);

    this.H1 = this.H1 + 20;

    this.doc.text('City:', this.L1, this.H1);
    this.doc.text(this.city_pdf, this.L2, this.H1);

    this.doc.text('Blood pressure:', this.L3, this.H1);
    this.doc.text(this.bp_pdf, this.L4, this.H1);

    this.H1 = this.H1 + 20;

    this.doc.setDrawColor(0, 91, 170);
    this.doc.line(40, this.H1, 550, this.H1);
  }
  checkpage() {
    if (this.H1 >= 760) {
      this.doc.addPage();
      this.H1 = 40;
    }
  }

  download() {
    this.allcalcs = [];
    this.cal1_array = [];
    this.cal2_array = [];
    this.cal3_array = [];
    this.cal4_array = [];
    this.cal5_array = [];
    this.cal6_array = [];
    this.cal7_array = [];
    this.cal1_score = {};
    this.cal2_score = {};
    this.cal3_score = {};
    this.cal4_score = {};
    this.cal5_score = {};
    this.cal6_score = {};
    this.cal7_score = {};
    this.calllocalstorage();
    if (localStorage.getItem('patient_data') != null) {
      this.maintitle();
      this.doc = new jspdf('p', 'pt', 'a4');
      this.H1 = 110;
      this.doc.text(this.doc_detail, 240, 40);

      this.patientdetails();

      // console.log('Working');

      // Creating list for each calculator
      if (localStorage.getItem('cal1_detail') != null) {
        let calc1 = [
          ['HasBled Score'],
          [
            'Hypertension',
            'Abnormal Renal',
            'Liver Function',
            'Stroke',
            'Bleeding',
            'Labile INRs',
            'Elderly',
            'Drug',
            'Alcohol',
          ],
          this.cal1_array,
          this.cal1_score,
        ];

        this.allcalcs.push(calc1);
      }

      if (localStorage.getItem('cal2_detail') != null) {
        let calc2 = [
          ['Atria Score'],
          [
            'Anemia',
            'Severe renal disease',
            'Age >= 75 years',
            'Any prior hemorrhage diagnosis',
            'Hypertension history',
          ],
          this.cal2_array,
          this.cal2_score,
        ];

        this.allcalcs.push(calc2);
      }

      if (localStorage.getItem('cal3_detail') != null) {
        let calc3 = [
          ['VTA Risk Score'],
          [
            'Previous VTE',
            'Known thrombophilia',
            'Current lower-limb paralysis',
            'Current cancer',
            'Immobilized >=7 days',
            'ICU/CCU stay',
            'Age >60 years',
          ],
          this.cal3_array,
          this.cal3_score,
        ];

        this.allcalcs.push(calc3);
      }

      if (localStorage.getItem('cal4_detail') != null) {
        let calc4 = [
          ['CHA2DS2-VASc Score'],
          [
            'Congestive heart failure',
            'Hypertension',
            'Age >= 75 years',
            'Diabetes mellitus',
            'Stroke/Transient Ischemic Attack/Thromboembolic event',
            'Vascular disease (prior MI, PAD, or aortic plaque)',
            'Age 65 to 74 years',
            'Sex category (ie, female sex)',
          ],
          this.cal4_array,
          this.cal4_score,
        ];

        this.allcalcs.push(calc4);
      }

      if (localStorage.getItem('cal5_detail') != null) {
        let calc5 = [
          ['Cardiovascular Disease (10-year risk)'],
          [
            'Age (years)',
            'HDL Chol',
            'Systolic Blood Pressure (mmHg)',
            'Total Chol (mg/dL)',
            'Gender',
            'On BP medication',
            'Cigarette smoker',
            'Diabetes present',
          ],
          this.cal5_array,
          this.cal5_score,
        ];

        this.allcalcs.push(calc5);
      }

      if (localStorage.getItem('cal6_detail') != null) {
        let calc6 = [
          ['Quick COVID-19 Severity Index'],
          [
            'Repiratory rate, breaths/min',
            'Pulse oximetry',
            'O2 flow rate, L/min',
          ],
          this.cal6_array,
          this.cal6_score,
        ];

        this.allcalcs.push(calc6);
      }

      if (localStorage.getItem('cal7_detail') != null) {
        let calc7 = [
          ['Argatroban Dosing'],
          [
            'Body Weight (kg)',
            'Indication',
            'Target ACT (sec)',
            'Hepatic Impairment',
          ],
          this.cal7_array,
          this.cal7_score,
        ];

        this.allcalcs.push(calc7);
      }

      // let calc2 = [
      //   'Calc 2',
      //   ['Param 1', 'Param 2', 'Param 1', 'Param 2'],
      //   ['Yes', 'No', 'Yes', 'No'],
      // ];
      // let allcalcs = [calc1, calc1, calc1, calc1, calc1, calc1, calc1];

      // console.log(allcalcs);
      // mycalc('HasBled score', ['Hypertension', 'Blood pressure'], ['Yes', 'No']);
      // console.log(allcalcs);

      console.log('Here');
      console.log(this.allcalcs);

      for (var z = 0; z < this.allcalcs.length; z++) {
        this.checkpage();

        // this.mycalc(allcalcs[z][0], allcalcs[z][1], allcalcs[z][2]);
        this.H1 = this.H1 + 30;
        this.checkpage();

        this.subtitles();
        this.doc.text(this.allcalcs[z][0], this.L1, this.H1);
        console.log(this.allcalcs[z][0]);

        this.H1 = this.H1 + 30;
        this.checkpage();

        this.textinside();

        let H2: number = this.H1 + 20;
        for (var i = 0; i < this.allcalcs[z][1].length; i++) {
          if (i % 2 == 0) {
            this.checkpage();
            if (this.templength == this.H1) {
              this.H1 = this.H1 + 20;
            }
            this.charlength = this.allcalcs[z][1][i].length;
            if (this.charlength < 32) {
              this.doc.text(this.allcalcs[z][1][i], this.L1, this.H1);
              this.doc.text(this.allcalcs[z][2][i], this.L2, this.H1);
              this.H1 = this.H1 + 20;
            } else {
              this.doc.text(
                this.allcalcs[z][1][i].substring(0, 32) + ' -',
                this.L1,
                this.H1
              );
              this.doc.text(this.allcalcs[z][2][i], this.L2, this.H1);
              this.templength = this.H1 + 20;
              this.doc.text(
                this.allcalcs[z][1][i].substring(33, this.charlength),
                this.L1,
                this.templength
              );

              this.H1 = this.templength;
            }
          } else {
            H2 = this.H1 - 20;
            this.charlength = this.allcalcs[z][1][i].length;
            if (this.charlength < 32) {
              this.doc.text(this.allcalcs[z][1][i], this.L3, H2);
              this.doc.text(this.allcalcs[z][2][i], this.L4, H2);
              this.H1 = H2 + 20;
            } else {
              this.doc.text(
                this.allcalcs[z][1][i].substring(0, 32) + ' -',
                this.L3,
                H2
              );
              this.doc.text(this.allcalcs[z][2][i], this.L4, H2);
              H2 = H2 + 20;
              this.doc.text(
                this.allcalcs[z][1][i].substring(33, this.charlength),
                this.L3,
                H2
              );
              this.H1 = H2 + 20;
            }
          }
        }
        // this.doc.setFont('bold');
        this.checkpage();
        this.doc.text('Interpretation:', 40, this.H1);
        this.H1 = this.H1 + 20;
        this.checkpage();
        let mycounter = 0;
        for (let key in this.allcalcs[z][3]) {
          if (mycounter % 2 == 0) {
            this.doc.text(key.toString(), this.L1, this.H1);
            this.doc.text(
              this.allcalcs[z][3][key].toString(),
              this.L2,
              this.H1
            );
            // this.H1 = this.H1 + 20;
            mycounter = mycounter + 1;
            // Whatever you want to do with key or obj[key]
          } else {
            H2 = this.H1 - 20;
            this.charlength = key.toString().length;
            if (this.charlength < 32) {
              this.doc.text(key.toString(), this.L3, this.H1);
              this.doc.text(
                this.allcalcs[z][3][key].toString(),
                this.L4,
                this.H1
              );
              this.H1 = this.H1 + 20;
              this.checkpage();
              mycounter = mycounter + 1;
            } else {
              this.doc.text(
                key.toString().substring(0, 32) + ' -',
                this.L3,
                this.H1
              );
              this.doc.text(
                key.toString().substring(32, this.charlength),
                this.L3,
                this.H1 + 20
              );
              this.newcharlen = this.allcalcs[z][3][key].toString().length;
              if (this.newcharlen < 37) {
                this.doc.text(
                  this.allcalcs[z][3][key].toString(),
                  this.L4,
                  this.H1
                );
              } else {
                this.doc.text(
                  this.allcalcs[z][3][key].toString().substring(0, 37) + ' -',
                  this.L4,
                  this.H1
                );
                this.H1 = this.H1 + 20;
                this.templength = this.H1;
                this.doc.text(
                  this.allcalcs[z][3][key].toString().substring(37, 74) + ' -',
                  this.L4,
                  this.H1
                );
                this.H1 = this.H1 + 20;
                this.doc.text(
                  this.allcalcs[z][3][key].toString().substring(74, 112) + ' -',
                  this.L4,
                  this.H1
                );
                this.H1 = this.H1 + 20;
                this.doc.text(
                  this.allcalcs[z][3][key].toString().substring(112, 148) +
                    ' -',
                  this.L4,
                  this.H1
                );
                this.H1 = this.H1 + 20;
                this.doc.text(
                  this.allcalcs[z][3][key]
                    .toString()
                    .substring(148, this.newcharlen),
                  this.L4,
                  this.H1
                );
              }

              // this.H1 = this.H1 + 20;

              this.H1 = this.H1 + 20;
              this.checkpage();
              mycounter = mycounter + 1;
            }
          }
        }

        this.H1 = this.H1 + 20;
        // this.doc.setFont('normal');
        this.doc.setDrawColor(0, 91, 170);
        this.doc.line(40, this.H1, 550, this.H1);
      }

      this.doc.output('dataurlnewwindow');
    } else {
      alert('Patient details are to be saved to generate the report');
    }
  }

  clearit() {
    localStorage.removeItem('patient_data');
    localStorage.removeItem('cal1_detail');
    localStorage.removeItem('cal2_detail');
    localStorage.removeItem('cal3_detail');
    localStorage.removeItem('cal4_detail');
    localStorage.removeItem('cal5_detail');
    localStorage.removeItem('cal6_detail');
    localStorage.removeItem('cal7_detail');
    localStorage.removeItem('cal1_score');
    localStorage.removeItem('cal2_score');
    localStorage.removeItem('cal3_score');
    localStorage.removeItem('cal4_score');
    localStorage.removeItem('cal5_score');
    localStorage.removeItem('cal6_score');
    localStorage.removeItem('cal7_score');
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  exit() {
    this.router.navigate(['/login']);
  }

  printPage() {
    this.pdf.emit();
  }

  openpatient() {
    let dialogRef = this.dialog.open(PatientDetailComponent, {
      data: {
        patient_id: this.patient_id,
        name: this.name,
        age: this.age,
        city: this.city,
        gender: this.gender,
        bp: this.bp,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog data');
      console.log(result);
      localStorage.setItem('patient_data', JSON.stringify(result));
      // console.log(`Dialog result: ${result}`);
    });
  }
}
