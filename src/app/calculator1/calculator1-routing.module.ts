import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculator1Component } from './calculator1.component';

const routes: Routes = [
  { path: '', component: Calculator1Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Calculator1RoutingModule { }
