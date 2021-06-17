import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Calculator3RoutingModule } from './calculator3-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Calculator3RoutingModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class Calculator3Module {}
