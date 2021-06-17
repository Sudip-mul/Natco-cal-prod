import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path: '',
    component:
      LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren:() => import('../login/login.module').then(m => m.LoginModule)
      }
    ]
    
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      
        {
        path: 'calculator1',
        loadChildren:() => import('../calculator1/calculator1.module').then(m => m.Calculator1Module)
        
      },
      {
        path: 'calculator2',
        loadChildren:() => import('../calculator2/calculator2.module').then(m => m.Calculator2Module)
      },
      {
        path: 'report',
        loadChildren:() => import('../report/report.module').then(m=> m.ReportModule)
      }
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
