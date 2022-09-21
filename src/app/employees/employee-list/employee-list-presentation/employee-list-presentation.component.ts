
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department, EmployeeDetails, StaffedProject } from '../../model';
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
    value ? this._departmentId = value : '';
    this.getEmployeeListById();
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
  @Input() public set employeeList(value: Department | null) {
    if (value) {
      this._employeeListOriginal = value['employee'];
      this._employeeList = value['employee'];
      this.departmentName = value['departmentName'];
      this.leadName = value['leadName'];
    }
    return;
  }
  public get employeeList(): any {
    return this._employeeList;
  }
  private _employeeList!: EmployeeDetails[];
  private _employeeListOriginal!: EmployeeDetails[];
  public departmentName: any;
  public leadName!: string;
  public currentEmpHour!: number;

  /**
   * @name getThead 
   * @description Element Reference
   */
  @ViewChild('getThead') getThead!: ElementRef<HTMLElement>;
  /**
   * @name getTbody
   * @description Element Reference
   */
  @ViewChild('getTbody') getTbody!: ElementRef<HTMLElement>;
  @ViewChild('cursorPosition') getcursorPosition!: ElementRef<any>

  /**
   * @name getEmployeeListById An event emitter
   * @description An event emitter for the department id to get the employee lst
   */
  @Output() getEmployeeById: EventEmitter<any>;

  @Output() openOverlay: EventEmitter<any>;

  @Output() openPopup: EventEmitter<any>

  public filterForm!: FormGroup

  constructor(private cdr: ChangeDetectorRef, private _employeePresenter: EmployeeListPresenterService) {
    this.getEmployeeById = new EventEmitter();
    this.openOverlay = new EventEmitter();
    this.openPopup = new EventEmitter();
  }

  ngOnInit(): void {
    this.filterForm = this._employeePresenter.buildForm();
    this.getEmployeeListById();
    this.getfilteredList();
  }

  /**
   * @name getEmployeeListById 
   * @description Get the empolyee list by the department ID.
   */
  private getEmployeeListById() {
    this.getEmployeeById.emit(this._departmentId);
  }

  /**
   * @name getTheadScroll
   * @param event Get the Event of the element
   * @description To scroll horizontally by ElementRef native element
   */
  public getTheadScroll(event: any) {
    const getBody: any = this.getTbody.nativeElement;
    getBody.scrollLeft = event.target.scrollLeft;
  }

  /**
   * @name getTbodyScroll
   * @param event Get the Event of the element
   * @description To scroll horizontally by ElementRef native element
   */
  public getTbodyScroll(event: any) {
    const getHead: any = this.getThead.nativeElement;
    getHead.scrollLeft = event.target.scrollLeft;
  }

  /**
  * @name checkAvailability
  * @description Check the status if the employee has the free hours from official hours
  * @param employeeList List of the employee staffed in project 
  * @returns Boolean
  */
  public checkAvailability(stafedDetails: StaffedProject[]) {
    let list = stafedDetails.map((item: StaffedProject) => item.hourSpend)
    let totalHours = list.reduce((perviousValue: number, currentValue: number) => perviousValue + currentValue);
    this.currentEmpHour = totalHours;
    if (totalHours >= 40) {
      return true;
    }
    else {
      return false
    }
  }

  /**
   * @name sort
   * @parameters The filterby value and the employee list.
   */
  public filter() {
    this._employeePresenter.filter(this.filterForm.value, this._employeeListOriginal);
  }

  /**
   * @name getSortedList
   * @description To get the filtered employee list
   */
  public getfilteredList() {
    this._employeePresenter.sortedList$.subscribe((res: any) => {
      this._employeeList = res
    })
  }

  public addTo(employeeId: any, isStaffed: boolean, currentEmpName: string) {
    let currentEmpHour = this.currentEmpHour;
    let departmenrId = this.departmentId;
    let currentEmp = {
      employeeId,
      departmenrId,
      currentEmpHour,
      currentEmpName
    };
    (!isStaffed) ? this.openOverlay.emit(currentEmp) : this.openPopup.emit(currentEmp.currentEmpName)
  }

  public openAction(event:any){
    console.log(event)
  }


}