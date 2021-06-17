import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Calculator4Component } from './calculator4.component';

const routes: Routes = [{ path: '', component: Calculator4Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Calculator4RoutingModule {}
