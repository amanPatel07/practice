
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StaffingFormPresenterService } from '../../staffing-form-container/staffing-form-presenter/staffing-form-presenter.service';
import { StaffingListPresenterService } from '../staffing-list-presenter/staffing-list-presenter.service';

@Component({
  selector: 'app-staffing-list-presentation',
  templateUrl: './staffing-list-presentation.component.html',
  viewProviders: [StaffingListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffingListPresentationComponent implements OnInit {

  @Input() public set projectList(value: any | null) {
    if (value) {
      this._projectList = value
    }
  }

  public get projectList() {
    return this._projectList;
  }

  @Input() public set departmentList(value: any | null) {
    if (value) {
      value.forEach((item: any) => {
        this._employeeList.push(item.employee)
      });
    }
  }
  public get departmentList(): any {
    return this._employeeList;
  }

  private _projectList!: any;
  private _employeeList: any[];
  public employeeNameList: any;

  constructor(private _presenterService: StaffingListPresenterService) {
    this._employeeList = [];
  }

  ngOnInit(): void {
  }

  public addNew(id?: any) {
    this._presenterService.openForm(id, this.employeeNameList);
  }

  public getEmployeeCount(projectId: number) {
    let result = this._presenterService.getEmployeeCountinProject(projectId, this._employeeList.flat());
    this.employeeNameList = result.employeeNameList;
    return result.employeeCount;
  }

}
