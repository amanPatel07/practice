import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FIRST_FORM_TITLE, SECOND_FORM_TITLE, THIRD_FORM_TITLE } from 'src/app/shared/constants';
import { StaffingFormPresenterService } from '../staffing-form-presenter/staffing-form-presenter.service';

@Component({
  selector: 'app-staffing-form-presentation',
  templateUrl: './staffing-form-presentation.component.html',
  viewProviders: [StaffingFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaffingFormPresentationComponent implements OnInit {

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

  public reset(){
    this.enrollForm.reset();
  }

}