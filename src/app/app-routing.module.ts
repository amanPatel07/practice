import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginComponent } from './core/login/login.component';
import { MasterComponent } from './core/master/master.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'login', pathMatch:'full'
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'', component:MasterComponent,
    canActivate:[AuthGuard],
    children:[
      { path:'', redirectTo:'staff', pathMatch:'full' },
      { path: 'staff', loadChildren: () => import('./staffing/staffing.module').then(m => m.StaffingModule) },
      { path: 'employee', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }