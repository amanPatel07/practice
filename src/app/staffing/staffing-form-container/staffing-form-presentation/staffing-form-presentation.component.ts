import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { StaffingFormPresenterService } from '../staffing-form-presenter/staffing-form-presenter.service';

@Component({
  selector: 'app-staffing-form-presentation',
  templateUrl: './staffing-form-presentation.component.html',
  viewProviders: [StaffingFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaffingFormPresentationComponent implements OnInit {

  @Output() closeOverlay: EventEmitter<Event>;

  public enrollForm: FormGroup
  private formCount: any
  public submitted: any

  constructor(private formService: StaffingFormPresenterService) {
    this.closeOverlay = new EventEmitter();
    this.enrollForm = this.formService.formBuild();
    this.formCount = 0;
    this.submitted = false
  }
  
  ngOnInit(): void {
    this.formService.formValue$.subscribe((res) => console.log(res))
  }

  public get getControls(){
    return this.enrollForm.controls; 
    // console.log(this.enrollForm.controls)
  }

  public onCancel(){
    this.closeOverlay.emit();
  }

  public submit(){
    this.submitted = true
    console.log(this.enrollForm)
    this.formService.submitForm(this.enrollForm)
  }

}
