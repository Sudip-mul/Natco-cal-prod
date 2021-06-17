import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { Calculator1Component } from './calculator1/calculator1.component';
import { Calculator2Component } from './calculator2/calculator2.component';

// import { LayoutRoutingModule } from './layout-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
// import { Calculator1Component } from './calculator1/calculator1.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { ReportComponent } from './report/report.component';
import { Calculator4Component } from './calculator4/calculator4.component';
import { Calculator3Component } from './calculator3/calculator3.component';
import { Calculator5Component } from './calculator5/calculator5.component';
import { Calculator6Component } from './calculator6/calculator6.component';
import { MatSelectModule } from '@angular/material/select';
// import { TestpdfComponent } from './testpdf/testpdf.component';
// import { PatientDetailComponent } from './header/patient-detail/patient-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    Calculator1Component,
    Calculator2Component,
    LoginComponent,
    ReportComponent,
    Calculator4Component,
    Calculator3Component,
    Calculator5Component,
    Calculator6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    LayoutModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
