import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, Validators, FormControl } from '@angular/forms'
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = "";
  patient_id: string = "";
  age: string = "";
  city: string = "";
  bp: string = "";
  gender: string = "";

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  @Output() pdf: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void { }
  




  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  exit() {
    this.router.navigate(['/login'])
  }

  printPage() {
    this.pdf.emit();
  }

  openpatient() {
    let dialogRef = this.dialog.open(PatientDetailComponent,
      {
        data: { patient_id: this.patient_id, name:this.name, age: this.age, city: this.city,gender: this.gender, bp: this.bp}
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log("dialog data")
      console.log(result)
      localStorage.setItem('patient_data',JSON.stringify(result))
      // console.log(`Dialog result: ${result}`);
    });
  }

}
