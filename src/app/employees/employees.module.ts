import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { EmployeeListService } from './employee-list.service';
import { EmployeeListPresentationComponent } from './employee-list/employee-list-presentation/employee-list-presentation.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeListPresentationComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    
  ],
  providers: [
    EmployeeListService,
    EmployeeListService
  ]
})
export class EmployeesModule { }
