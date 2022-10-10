import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FIRST_FORM_TITLE, SECOND_FORM_TITLE, THIRD_FORM_TITLE } from 'src/app/shared/constants';
import { Project } from 'src/app/shared/model';
import { StaffingFormPresenterService } from '../staffing-form-presenter/staffing-form-presenter.service';

@Component({
  selector: 'app-staffing-form-presentation',
  templateUrl: './staffing-form-presentation.component.html',
  viewProviders: [StaffingFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaffingFormPresentationComponent implements OnInit {

  @Input() public set project(value: Project | null) {
    if (value) this._project = value;
    console.log(this._project)
  }
  public get project(): Project {
    return this._project;
  }
  private _project!: Project;

  @Input() public set employeeNameList(value: any) {
    if (value) this._employeeNameList = value;
    console.log("value", value)
  }
  public get employeeNameList(): any {
    return this._employeeNameList;
  }
  private _employeeNameList!: any;

  @Input() public set pmList(value: any) {
    if (value) this._pmList = value;
  }
  public get pmList(): any {
    return this._pmList;
  }
  private _pmList!: any;

  @Output() closeOverlay: EventEmitter<Event>;

  public enrollForm: FormGroup;

  constructor(private formService: StaffingFormPresenterService) {
    this.closeOverlay = new EventEmitter();
    this.enrollForm = this.formService.formBuild();
  }

  ngOnInit(): void {
  }

  public get getControls() {
    return this.enrollForm.controls;
  }

  public onCancel() {
    this.closeOverlay.emit();
  }

  public submit() {
  }

  public reset() {
    this.enrollForm.reset();
  }

}