import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffingFormContainerComponent } from './staffing-form-container/staffing-form-container.component';
import { StaffingFormPresentationComponent } from './staffing-form-container/staffing-form-presentation/staffing-form-presentation.component';
import { StaffingListContainerComponent } from './staffing-list-container/staffing-list-container.component';
import { StaffingListPresentationComponent } from './staffing-list-container/staffing-list-presentation/staffing-list-presentation.component';
import { StaffingRoutingModule } from './staffing-routing.module';


@NgModule({
  declarations: [
    StaffingListContainerComponent,
    StaffingListPresentationComponent,
    StaffingFormContainerComponent,
    StaffingFormPresentationComponent
  ],
  imports: [
    CommonModule,
    StaffingRoutingModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [

  ]
})
export class StaffingModule { }
