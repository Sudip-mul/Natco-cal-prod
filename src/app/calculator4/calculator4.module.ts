import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { Calculator4RoutingModule } from './calculator4-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Calculator4RoutingModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class Calculator4Module {}
