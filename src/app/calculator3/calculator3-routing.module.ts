import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculator3Component } from './calculator3.component';

const routes: Routes = [{ path: '', component: Calculator3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Calculator3RoutingModule {}
