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
  public employee$: Observable<any>;
  private _id!: number;

  constructor(
    private _employeeService: EmployeeService,
    private _employeeListService: EmployeeListService,
    private _utilityService: UtilityService
  ) {
    this.deptid$ = new Observable();
    this.employeeList$ = new Observable();
    this.employee$ = new Observable();
  }

  ngOnInit(): void {
    this.deptid$ = this._employeeService.departmentId$;
  }

  public getEmployeeById(id: any) {
    this._id = id.departmentId;
    this.employeeList$ = this._employeeListService.getEmployeesList(this._id);
  }

  public openOverlay(details: any) {
    this._utilityService.openOverlayForm(details, Popup_Type.FORM_OVERLAY)
  }

  public openPopup(event: any) {
    if (event.action === Popup_Type.ACTION_POPUP) {
      this._utilityService.openPopup(event, Popup_Type.ACTION_POPUP);
    }
    else {
      this._utilityService.openPopup(event, Popup_Type.INFO_POPUP);
    }
  }

  public async getSearchResult(isSearchOn: any) {
    if(isSearchOn){
      this.employeeList$ = this._utilityService.searchText$;
    }
    else{
      this.employeeList$ = this._employeeListService.getEmployeesList(this._id)
    }
  }
}
