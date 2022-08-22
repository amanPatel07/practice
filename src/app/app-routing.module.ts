import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './core/master/master.component';

const routes: Routes = [
  {
    path:'', redirectTo:'', pathMatch:'full'
  },
  {
    path:'', component:MasterComponent,
    children:[
      { path:'', redirectTo:'staffing', pathMatch:'full' },
      { path: 'staffing', loadChildren: () => import('./staffing/staffing.module').then(m => m.StaffingModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
