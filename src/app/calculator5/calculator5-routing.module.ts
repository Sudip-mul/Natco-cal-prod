import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculator5Component } from './calculator5.component';

const routes: Routes = [{ path: '', component: Calculator5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Calculator5RoutingModule {}
