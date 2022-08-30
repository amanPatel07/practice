import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffingListContainerComponent } from './staffing-list-container/staffing-list-container.component';

const routes: Routes = [
  // { path:'', redirectTo:'', pathMatch:'full'},
  { path: '', component: StaffingListContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffingRoutingModule { }
