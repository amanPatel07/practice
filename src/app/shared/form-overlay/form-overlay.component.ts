import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../common-services/common.service';
import { UtilityService } from '../common-services/utility.service';
import { Employee, Project } from '../model';

@Component({
  selector: 'app-form-overlay',
  templateUrl: './form-overlay.component.html',
  styles: [
  ]
})
export class FormOverlayComponent implements OnInit {

  public details: any;
  public staffForm: FormGroup;
  public currentEmployee!: Employee;
  public employeeName!: string;
  public projectList: any;

  /**
   * @name currentDetails
   * @description Setter and Getter for id of department and the employee that to be added in the project
   */
  @Input() public set currentDetails(value: any | null) {
    if (value) {
      this.details = value
    }
  }
  public get currentDetails(): any | null {
    return this.details
  }

  /**
   * @name closeOverlay
   * @description An event emitter for closing the form overlay
   */
  @Output() closeOverlay: EventEmitter<Event>

  constructor(
    public fb: FormBuilder,
    public utilityService: UtilityService,
    private _commonService: CommonService
  ) {
    this.staffForm = this.formBuild();
    this.closeOverlay = new EventEmitter();
  }

  ngOnInit(): void {
    this.getEmployeeById();
    this.getProject();
  }

  /**
   * @name formBuild
   * @description Create the form group
   * @returns Object of form group with formControlName
   */
  public formBuild(): FormGroup {
    return this.fb.group({
      employeeName: [],
      email: [],
      contactNumber: [],
      designation: [],
      role: [],
      project: [],
      joinDate: [],
      projectStatus: [],
      projectDesc: [],
    })
  }

  /**
   * @name close
   * @description Emit the close event for the overlay form.
   */
  public close() {
    this.closeOverlay.emit();
  }

  /**
   * @name getEmployeeById
   * @description Get the selected employee details
   */
  public getEmployeeById() {
    this._commonService.getDepartmentById(this.details.departmenrId, this.details.employeeId).subscribe((res: any) => {
      this.employeeName = res.employeeName;
      this.currentEmployee = res;
      this.staffForm.patchValue(this.currentEmployee);
    })
  }

  /**
   * @name getProject
   * @description To get the list of the projects
   */
  public getProject() {
    this._commonService.getProject().subscribe((res: Project) => {
      this.projectList = res;
    })
  }

  public submit() {
    console.log(this.staffForm.value)
  }

  public reset(): void{
    this.staffForm.reset();
    this.staffForm.patchValue(this.currentEmployee);
  }

  

}
