import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  public hasAvailableTime!: number;

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
    private _commonService: CommonService,
  ) {
    this.staffForm = this.formBuild();
    this.closeOverlay = new EventEmitter();
  }

  ngOnInit(): void {
    this.props();
    this.getEmployeeById();
    this.getProject();
  }
  
  public props(){
    this.hasAvailableTime = parseFloat((40 - this.details.currentEmpHour).toFixed(2));
    this.getControls['employeeName'].disable();
    this.getControls['email'].disable();
    this.getControls['contactNumber'].disable();
    this.getControls['designation'].disable();
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
      minHour: []
    })
  }

  public get getControls(){
    return this.staffForm.controls;
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
    let projectId = parseInt(this.staffForm.controls['project'].value);
    let hourSpend = this.getControls['minHour'].value;
    let joinDate = this.getControls['joinDate'].value;
    this.currentEmployee.staffProjectId.push({projectId, hourSpend, joinDate});
    this.getControls['project'].setValue(parseInt(this.staffForm.controls['project'].value))
    console.log(this.currentEmployee);
    console.log(this.staffForm.value);
  }
  
  public reset(){
    this.staffForm.reset();
    this.staffForm.patchValue(this.currentEmployee);
  }

  
  
}
