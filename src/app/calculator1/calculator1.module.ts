import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Calculator1RoutingModule } from './calculator1-routing.module';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DialogPopupComponent
  ],
  imports: [
    CommonModule,
    Calculator1RoutingModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class Calculator1Module { }
