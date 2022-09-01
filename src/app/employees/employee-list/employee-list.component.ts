import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { EmployeeListService } from '../employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  viewProviders: [EmployeeListService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListComponent implements OnInit {

  public departmentId: any;
  public deptid$: Observable<any> 
  public employeeList$: Observable<any>;

  constructor(
    private _employeeService: EmployeeService,
    private _employeeListService: EmployeeListService
  ) {
    this.deptid$ = new Observable();
    this.employeeList$ = new Observable();
  }

  ngOnInit(): void {
    this.deptid$ = this._employeeService.departmentId$;
  }
  
  public getEmployeeById(id: any) {
    this.employeeList$ = this._employeeListService.getEmployeesList(id)
  }

  
}
