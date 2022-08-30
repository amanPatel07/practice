import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeListPresentationComponent } from './employee-list/employee-list-presentation/employee-list-presentation.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeListPresentationComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
