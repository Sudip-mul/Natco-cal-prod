import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastreportsComponent } from './pastreports.component';

const routes: Routes = [{ path: '', component: PastreportsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastreportsRoutingModule {}
