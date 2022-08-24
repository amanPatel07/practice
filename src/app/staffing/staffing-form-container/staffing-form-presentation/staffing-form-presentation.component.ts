import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormGroupName } from '@angular/forms';
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
  public submitted: any;
  public title: string;
  public isDisable: Boolean

  constructor(private formService: StaffingFormPresenterService) {
    this.closeOverlay = new EventEmitter();
    this.enrollForm = this.formService.formBuild();
    this.submitted = false;
    this.title = FIRST_FORM_TITLE;
    this.isDisable = false;
  }

  ngOnInit(): void {
    this.formService.formValue$.subscribe((res) => console.log(res));
    console.log(this.enrollForm);
  }

  public get getControls() {
    return this.enrollForm.controls;
  }

  public onCancel() {
    this.closeOverlay.emit();
  }

  public btnDisable(){
    for(let key in this.enrollForm.controls){
      console.log(this.getControls[key].value);
    }
  }

  public next(title:any, formControls:any) {
    let valid;
    this.formService.checkValidity(title, formControls)
    this.formService.validForm$.subscribe(res=> valid = res)
    if(valid){
      
    }
    // this.submitted = !this.enrollForm.valid;
    // let FISRTFORM = this.getControls['firstForm']?.value;
    // let SECONDFORM = this.getControls['secondForm']?.value;
    // let THIRDFORM = this.getControls['thirdForm']?.value;
    // if (!FISRTFORM) {
    //   this.getControls['firstForm']?.setValue(true);
    //   this.title = SECOND_FORM_TITLE;
    // } else if (FISRTFORM && !SECONDFORM) {
    //   this.getControls['secondForm']?.setValue(true);
    //   this.title = THIRD_FORM_TITLE;
    // } else if ((FISRTFORM && SECONDFORM) && !THIRDFORM) {
    //   this.getControls['thirdForm']?.setValue(true);
    //   this.closeOverlay.emit();
    // }
  }

  public previous() {
    switch (this.title) {
      case FIRST_FORM_TITLE:
        this.getControls['firstForm']?.setValue(null);
        this.getControls['secondForm']?.setValue(null);
        this.getControls['thirdForm']?.setValue(null);
        break;
      case SECOND_FORM_TITLE:
        this.getControls['firstForm']?.setValue(null);
        this.getControls['secondForm']?.setValue(null);
        this.getControls['thirdForm']?.setValue(null);
        this.title = FIRST_FORM_TITLE;
        break;
      case THIRD_FORM_TITLE:
        this.getControls['thirdForm']?.setValue(null);
        this.getControls['secondForm']?.setValue(null);
        this.getControls['firstForm']?.setValue(true);
        this.title = SECOND_FORM_TITLE;
        break;
      default:
        break;
    }
  }

  public submit(){
    console.log();
  }

}
