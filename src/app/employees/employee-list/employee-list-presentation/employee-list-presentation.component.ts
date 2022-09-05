import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Target } from '@angular/compiler';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Scroll } from '@angular/router';
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
    // if (value) {
    //   this._departmentId = value;
    //   this.getEmployeeListById();
    // }
    value ?  this._departmentId = value : '';
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
  @Input() public set employeeList(value: any | null) {
    if (value) {
      this._employeeList = value['employee'];
      this.departmentName = value['departmentName'];
    }
    return;
  }
  public get employeeList(): any {
    return this._employeeList;
  }
  private _employeeList!: any;
  public departmentName: any;

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

  /**
   * @name getEmployeeListById An event emitter
   * @description An event emitter for the department id to get the employee lst
   */
  @Output() getEmployeeById: EventEmitter<any>;

  constructor(private cdr: ChangeDetectorRef) {
    this.getEmployeeById = new EventEmitter();
  }

  ngOnInit(): void {
    this.getEmployeeListById();
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
}