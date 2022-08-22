import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffingFormContainerComponent } from './staffing-form-container/staffing-form-container.component';
import { StaffingListContainerComponent } from './staffing-list-container/staffing-list-container.component';

const routes: Routes = [
  { path:'', redirectTo:'staffing-list', pathMatch:'full'},
  { path: 'staffing-list', component: StaffingListContainerComponent },
  { path: 'staffing-form', component: StaffingFormContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffingRoutingModule { }
