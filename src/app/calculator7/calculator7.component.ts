import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calculator7',
  templateUrl: './calculator7.component.html',
  styleUrls: ['./calculator7.component.css'],
})
export class Calculator7Component implements OnInit {
  bolus_dose: number = 0;
  bolus_vol: number = 0;
  infusion_dose: number = 0;
  infusion_rate: number = 0;
  score1: number = 0;
  score2: string = '';
  score3: number = 0;
  score4: string = '';
  s3d = false;
  head1: string = '';
  head2: string = '';
  content1: string = '';
  content2: string = '';

  isShown: boolean = false;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  formGroup = new FormGroup({
    score1: new FormControl('', [Validators.required]),
    score2: new FormControl('', [Validators.required]),
    score3: new FormControl({ disabled: true }),
    score4: new FormControl('', [Validators.required]),
  });

  onSelectionChanged() {
    if (this.formGroup.value.score2 === 'Patients Undergoing PCI') {
      this.isShown = !this.isShown;
    } else {
      this.isShown = false;
    }
    // console.log(this.score2);
    // if (this.formGroup.value.score2 === 'Patients with HIT') {
    //   // this.formGroup.value.get('score3').disable();
    //   this.s3d = true
    // } else
    // {
    //   this.s3d = false
    //   this.formGroup.value.get('score3').enable();
    // }
  }

  reset() {
    // window.location.reload();

    this.formGroup.reset();
    this.bolus_dose = 0;
    this.bolus_vol = 0;
    this.infusion_dose = 0;
    this.infusion_rate = 0;
    this.head1 = '';
    this.head2 = '';
    this.content1 = '';
    this.content2 = '';
  }

  ScoreSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      localStorage.setItem('cal7_detail', JSON.stringify(this.formGroup.value));

      if (this.formGroup.value.score2 == 'Patients with HIT') {
        this.head1 = 'Monitoring Therapy';
        this.content1 =
          ' For use in HIT, therapy with Argatroban Injection is monitored using the aPTT with a target range of 1.5 to 3 times the initial baseline value (not to exceed 100 seconds). Tests of anticoagulant effects (including the aPTT) typically attain steady-state levels within 1 to 3 hours following initiation of Argatroban Injection. Check the aPTT 2 hours after initiation of therapy and after any dose change to confirm that the patient has attained the desired therapeutic range.';
        this.head2 = 'Dosage Adjustment';
        this.content2 =
          'After the initiation of Argatroban Injection, adjust the dose (not to exceed 10 mcg/kg/min) as necessary to obtain a steady-state aPTT in the target range.';
      } else {
        this.head1 = 'Monitoring Therapy';
        this.content1 =
          'For use in PCI, therapy with Argatroban Injection is monitored using ACT. Obtain ACTs before dosing, 5 to 10 minutes after bolus dosing, following adjustments in the infusion rate, and at the end of the PCI procedure. Obtain additional ACTs every 20 to 30 minutes during a prolonged procedure.';
        this.head2 = 'Continued Anticoagulation after PCI';
        this.content2 =
          'If a patient requires anticoagulation after the procedure, Argatroban Injection may be continued, but at a rate of 2 mcg/kg/min and adjusted as needed to maintain the aPTT in the desired range.';
      }

      if (this.formGroup.value.score4 == 'Yes') {
        this.bolus_dose = 0;
        this.bolus_vol = 0;
        this.infusion_dose = 0.5 * parseInt(this.formGroup.value.score1);
        this.infusion_dose = Math.round(this.infusion_dose);
        console.log(this.infusion_dose);
        // console.log(this.infusion_dose);
        // this.infusion_dose.toFixed();
        this.infusion_rate =
          (60 * 0.5 * parseInt(this.formGroup.value.score1) * 250) /
          (1000 * 250);
        this.infusion_rate = Math.round(this.infusion_rate);
        // this.infusion_rate.toFixed();
      } else {
        if (this.formGroup.value.score2 == 'Patients with HIT') {
          this.bolus_dose = 0;
          this.bolus_vol = 0;
          this.infusion_dose = 2 * parseInt(this.formGroup.value.score1);
          this.infusion_dose = Math.round(this.infusion_dose);
          // console.log(this.infusion_dose);
          // this.infusion_dose.toFixed();
          this.infusion_rate =
            (60 * 2 * parseInt(this.formGroup.value.score1) * 250) /
            (1000 * 250);
          this.infusion_rate = Math.round(this.infusion_rate);
        } else if (
          this.formGroup.value.score2 == 'Patients Undergoing PCI' &&
          this.formGroup.value.score3 >= 300 &&
          this.formGroup.value.score3 <= 450
        ) {
          this.bolus_dose = 350 * parseInt(this.formGroup.value.score1);

          this.bolus_vol = this.bolus_dose / 1000;
          this.bolus_dose = Math.round(this.bolus_dose);
          this.bolus_vol = Math.round(this.bolus_vol);
          this.infusion_dose = 25 * parseInt(this.formGroup.value.score1);
          this.infusion_dose = Math.round(this.infusion_dose);
          // console.log(this.infusion_dose);
          // this.infusion_dose.toFixed();
          this.infusion_rate =
            (60 * 25 * parseInt(this.formGroup.value.score1) * 250) /
            (1000 * 250);
          this.infusion_rate = Math.round(this.infusion_rate);
        } else if (
          this.formGroup.value.score2 == 'Patients Undergoing PCI' &&
          this.formGroup.value.score3 < 300
        ) {
          this.bolus_dose = 30 * parseInt(this.formGroup.value.score1);
          this.bolus_vol = this.bolus_dose / 1000;
          this.bolus_dose = Math.round(this.bolus_dose);
          this.bolus_vol = Math.round(this.bolus_vol);
          this.infusion_dose = 30 * parseInt(this.formGroup.value.score1);
          this.infusion_dose = Math.round(this.infusion_dose);
          // console.log(this.infusion_dose);
          // this.infusion_dose.toFixed();
          this.infusion_rate =
            (60 * 30 * parseInt(this.formGroup.value.score1) * 250) /
            (1000 * 250);
          this.infusion_rate = Math.round(this.infusion_rate);
        } else if (
          this.formGroup.value.score2 == 'Patients Undergoing PCI' &&
          this.formGroup.value.score3 > 450
        ) {
          this.bolus_dose = 0;
          this.bolus_vol = 0;
          // this.bolus_dose = Math.round(this.bolus_dose)
          // this.bolus_vol = Math.round(this.bolus_vol)
          this.infusion_dose = 15 * parseInt(this.formGroup.value.score1);
          this.infusion_dose = Math.round(this.infusion_dose);
          // console.log(this.infusion_dose);
          // this.infusion_dose.toFixed();
          this.infusion_rate =
            (60 * 15 * parseInt(this.formGroup.value.score1) * 250) /
            (1000 * 250);
          this.infusion_rate = Math.round(this.infusion_rate);
        } else {
          alert(
            'Please fill Target ACT (sec) as you have selected Patient Undergoing PCI'
          );
        }
      }

      let finaldose: any;
      if (this.bolus_dose == 0) {
        finaldose = '-';
      } else {
        finaldose = this.bolus_dose;
      }

      let finalvolume: any;
      if (this.bolus_vol == 0) {
        finalvolume = '-';
      } else {
        finalvolume = this.bolus_vol;
      }

      let final_score = {
        'Bolus dose': finaldose,
        'Bolus Volume (mL)': finalvolume,
        'Continuous Infusion Dose (mcg/min)': this.infusion_dose,
        'Continuous Infusion Rate (mL/hr)': this.infusion_rate,
      };
      localStorage.setItem('cal7_score', JSON.stringify(final_score));
    } else {
      alert('Please fill all details');
    }
  }
}
