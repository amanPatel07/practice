import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouteReuseStrategy, RouterLinkActive, RouterState } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { UtilityService } from 'src/app/shared/common-services/utility.service';
import { Popup_Type } from 'src/app/shared/constants';
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
    private _employeeListService: EmployeeListService,
    private _utilityService: UtilityService
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

  public openOverlay(details:any){
    this._utilityService.openOverlayForm(details, Popup_Type.FORM_OVERLAY)
  }

  public openPopup(event: any){
    this._utilityService.openPopup(event, Popup_Type.INFO_POPUP);
  }

  
}
