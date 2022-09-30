import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './core/auth-callback/auth-callback.component';
import { AuthGuard } from './core/guard/auth.guard';
import { LoginComponent } from './core/login/login.component';
import { MasterComponent } from './core/master/master.component';

const routes: Routes = [
  {
    path: 'auth', component: AuthCallbackComponent
  },
  {
    path: '', component: MasterComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'staff', pathMatch: 'full' },
      { path: 'staff', loadChildren: () => import('./staffing/staffing.module').then(m => m.StaffingModule) },
      { path: 'employee', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
    ]
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }