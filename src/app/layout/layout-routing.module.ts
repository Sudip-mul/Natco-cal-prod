import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'calculator1',
        loadChildren: () =>
          import('../calculator1/calculator1.module').then(
            (m) => m.Calculator1Module
          ),
      },
      {
        path: 'calculator2',
        loadChildren: () =>
          import('../calculator2/calculator2.module').then(
            (m) => m.Calculator2Module
          ),
      },
      {
        path: 'calculator3',
        loadChildren: () =>
          import('../calculator3/calculator3.module').then(
            (m) => m.Calculator3Module
          ),
      },
      {
        path: 'calculator4',
        loadChildren: () =>
          import('../calculator4/calculator4.module').then(
            (m) => m.Calculator4Module
          ),
      },
      {
        path: 'calculator5',
        loadChildren: () =>
          import('../calculator5/calculator5.module').then(
            (m) => m.Calculator5Module
          ),
      },
      {
        path: 'calculator6',
        loadChildren: () =>
          import('../calculator6/calculator6.module').then(
            (m) => m.Calculator6Module
          ),
      },
      {
        path: 'calculator7',
        loadChildren: () =>
          import('../calculator7/calculator7.module').then(
            (m) => m.Calculator7Module
          ),
      },
      {
        path: 'disclaimer',
        loadChildren: () =>
          import('../disclaimer/disclaimer.module').then(
            (m) => m.DisclaimerModule
          ),
      },
      {
        path: 'report',
        loadChildren: () =>
          import('../report/report.module').then((m) => m.ReportModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
