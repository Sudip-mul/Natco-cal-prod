import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Calculator2RoutingModule } from './calculator2-routing.module';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DialogPopupComponent
  ],
  imports: [
    CommonModule,
    Calculator2RoutingModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class Calculator2Module { }
