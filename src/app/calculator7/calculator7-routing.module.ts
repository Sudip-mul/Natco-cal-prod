import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculator7Component } from './calculator7.component';

const routes: Routes = [
  { path: '', component: Calculator7Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Calculator7RoutingModule { }
