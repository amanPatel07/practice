import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/common-services/common.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  viewProviders: [CommonService]
})
export class SidebarComponent implements OnInit {

  public isDropDownOpen: Boolean;
  public departmentList: any;

  constructor(
    private _employee: EmployeeService,
    private _commonService: CommonService,
    private _router: Router
  ) {
    this.isDropDownOpen = false;
  }

  ngOnInit(): void {
    this._employee.department(1);
    this.getDepartment();
  }

  public getDepartment(){
    this._commonService.getDepartment().subscribe(res=> this.departmentList = res)
  }

  public dropDown() {
    this.isDropDownOpen = !this.isDropDownOpen
  }

  public departmentId(id: any) {
      this._employee.department(id);
  }


}
