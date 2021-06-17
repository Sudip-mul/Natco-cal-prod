import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculator6Component } from './calculator6.component';

const routes: Routes = [{ path: '', component: Calculator6Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Calculator6RoutingModule {}
