import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculator2Component } from './calculator2.component';

const routes: Routes = [
  {path:'', component: Calculator2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Calculator2RoutingModule { }
