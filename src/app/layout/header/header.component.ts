import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import jspdf from 'jspdf';

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

  detail: any;
  doc_detail: any;

  cal1_detail: any;
  cal1_score: any;

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @Output() pdf: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, public dialog: MatDialog) {
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
  }

  ngOnInit(): void {}

  download() {
    let doc = new jspdf('p', 'pt', 'a4');
    function maintitle() {
      doc.setFontSize(18);
      doc.setFont('bold');
      doc.setTextColor(112, 112, 112);
    }

    function subtitles() {
      doc.setFontSize(15);
      doc.setFont('bold');
      doc.setTextColor(0, 91, 170);
    }

    function textinside() {
      doc.setFontSize(12);
      doc.setFont('normal');
      doc.setTextColor(112, 112, 112);
    }

    let L1 = 40;
    let L2 = 150;
    let L3 = 300;
    let L4 = 410;

    let H1: number = 110;

    maintitle();
    doc.text(this.doc_detail, 240, 40);

    function patientdetails() {
      subtitles();
      doc.text('Patient details', L1, 80);

      textinside();
      doc.text('Patient ID:', L1, H1);
      doc.text('Patient Kumar', L2, H1);

      doc.text('Patient name:', L3, H1);
      doc.text('A Prakash', L4, H1);

      H1 = H1 + 20;

      doc.text('Age:', L1, H1);
      doc.text('38', L2, H1);

      doc.text('Gender:', L3, H1);
      doc.text('Male', L4, H1);

      H1 = H1 + 20;

      doc.text('City:', L1, H1);
      doc.text('Hyderabad', L2, H1);

      doc.text('Blood pressure:', L3, H1);
      doc.text('130 / 80', L4, H1);

      H1 = H1 + 20;

      doc.setDrawColor(0, 91, 170);
      doc.line(40, H1, 550, H1);
    }

    function mycalc(calcname, calcparams, calcvalues) {
      H1 = H1 + 30;

      console.log(calcname);
      subtitles();
      doc.text(calcname, L1, H1);

      H1 = H1 + 30;

      textinside();
      let H2: number = H1 + 20;
      for (var i = 0; i < calcparams.length; i++) {
        if (i % 2 == 0) {
          doc.text(calcparams[i], L1, H1);
          doc.text(calcvalues[i], L2, H1);
          H1 = H1 + 20;
        } else {
          H2 = H1 - 20;
          doc.text(calcparams[i], L3, H2);
          doc.text(calcvalues[i], L4, H2);
          H1 = H2 + 20;
        }
      }
      doc.setDrawColor(0, 91, 170);
      doc.line(40, H1, 550, H1);
    }

    patientdetails();

    let calc1 = [
      'HasBled Score',
      ['Hypertension', 'Blood pressure', 'Hypertension'],
      ['Yes', 'No', 'Yes'],
    ];
    let calc2 = [
      'Calc 2',
      ['Param 1', 'Param 2', 'Param 1', 'Param 2'],
      ['Yes', 'No', 'Yes', 'No'],
    ];
    let allcalcs = [calc1, calc2, calc1, calc2, calc1, calc2, calc1];

    // console.log(allcalcs);
    // mycalc('HasBled score', ['Hypertension', 'Blood pressure'], ['Yes', 'No']);
    // console.log(allcalcs);

    for (var z = 0; z < allcalcs.length; z++) {
      mycalc(allcalcs[z][0], allcalcs[z][1], allcalcs[z][2]);
    }

    doc.output('dataurlnewwindow');
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
