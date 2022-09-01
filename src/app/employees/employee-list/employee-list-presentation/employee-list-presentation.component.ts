import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  viewProviders: [EmployeeListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListPresentationComponent implements OnInit {

  /**
  * @name departmenrId Setter Getter for the departmentID
  * @description Get the departmenrID
  * @return The Department ID
  */
  @Input() public set departmentId(value: any) {
    if (value) {
      this._departmentId = value;     
      this.getEmployeeListById();
    }

  }
  public get departmentId(): any {
    return this._departmentId;
  }
  private _departmentId!: any;

  /**
   * @name EmployeeList Settter Getter for the Employeel List
   * @description Get the employee list by the department ID
   * @return The Employee List
   */
  @Input() public set employeeList(value: any | null) {
    if (value) {
      this._employeeList = value['employee'];
      this.departmentName = value['departmentName']
    }
    return
  }
  public get employeeList(): any {
    return this._employeeList;
  }
  private _employeeList!: any;
  public departmentName: any

  /**
   * @name getEmployeeListById An event emitter
   * @description An event emitter for the department id to get the employee lst
   */
  @Output() getEmployeeById: EventEmitter<any>;

  constructor(private cdr: ChangeDetectorRef) {
    this.getEmployeeById = new EventEmitter()
  }

  ngOnInit(): void {
    this.getEmployeeListById();
  }

  /**
   * @name getEmployeeListById 
   * @description Get the empolyee list by the department ID.
   */
  private getEmployeeListById() {
    this.getEmployeeById.emit(this._departmentId)
  }

}
