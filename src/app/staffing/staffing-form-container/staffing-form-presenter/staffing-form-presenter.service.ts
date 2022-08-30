import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { FIRST_FORM_TITLE, SECOND_FORM_TITLE, THIRD_FORM_TITLE } from 'src/app/shared/constants';

@Injectable()
export class StaffingFormPresenterService {

  private _formValue: Subject<any>
  public formValue$: Observable<any>
  public formGroupObj!: FormGroup

  private validForm: Subject<any>;
  public validForm$: Observable<any>;

  constructor(private fb: FormBuilder) {
    this._formValue = new Subject();
    this.formValue$ = new Observable();
    this.formValue$ = this._formValue.asObservable();

    this.validForm = new Subject();
    this.validForm$ = new Observable();
    this.validForm$ = this.validForm.asObservable();

  }
  /**
   * @method formBuild
   * @description The form group with the form controls
   * @returns Form Group
   */
  public formBuild() {
    this.formGroupObj = this.fb.group({
      developerName: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: ['', Validators.required],
      developerId: ['', Validators.required],
      designation: ['', Validators.required],
      firstForm: [''],
      projectName: ['', Validators.required],
      projectLead: ['', Validators.required],
      moduleLead: ['', Validators.required],
      description: ['', Validators.required],
      staffing: ['', Validators.required],
      secondForm: [''],
      frameWork: ['', Validators.required],
      cssFramework: ['', Validators.required],
      joinDate: ['', Validators.required],
      releaseDate: ['', Validators.required],
      status: ['', Validators.required],
      comment: ['', Validators.required],
      thirdForm: ['']
    })
    return this.formGroupObj;
  }

  public checkValidity(title: string, formControl: any) {
    let formControlNames = this.getKeys(formControl)
    let firstFormValid, secondFormValid, thirdFormValid;
    if (title === FIRST_FORM_TITLE) {
      firstFormValid = this.validateFirstForm(formControlNames, formControl);
      this.validForm.next(firstFormValid);
      return 
    }
    else if(title === SECOND_FORM_TITLE){
      secondFormValid = this.validateSecondForm(formControlNames, formControl);
      this.validForm.next(secondFormValid);
      return;
    }
    else if(title === THIRD_FORM_TITLE){
      thirdFormValid = this.validateThirdForm(formControlNames, formControl)
      this.validForm.next(thirdFormValid);
      return;
    }
  }

  public getKeys(formControl: any) {
    let formControlsArr = [];
    let obj = new Object();
    for (let key in this.formGroupObj.controls) {
      obj = { [key]: formControl[key].status }
      formControlsArr.push(obj)
    }
    return formControlsArr
  }

  public validateFirstForm(formControlNames: any, formControl: any) {
    let developerName = formControl['developerName'].status;
    let contactNumber = formControl['contactNumber'].status;
    let email = formControl['email'].status;
    let developerId = formControl['developerId'].status;
    let designation = formControl['designation'].status;
    for (let i = 0; i < formControlNames.length; i++) {
      if ((developerName && contactNumber && email && developerId && designation) === 'VALID') {
        return true
      }
    }
    return false
  }

  public validateSecondForm(formControlNames: any, formControl: any) {
    let projectName = formControl['projectName'].status;
    let projectLead = formControl['projectLead'].status;
    let moduleLead = formControl['moduleLead'].status;
    let description = formControl['description'].status;
    let staffing = formControl['staffing'].status;
    for (let i = 0; i < formControlNames.length; i++) {
      if ((projectName && projectLead && moduleLead && description && staffing) === 'VALID') {
        return true
      }
    }
    return false
  }

  public validateThirdForm(formControlNames: any, formControl: any) {
    let frameWork = formControl['frameWork'].status;
    let cssFramework = formControl['cssFramework'].status;
    let joinDate = formControl['joinDate'].status;
    let releaseDate = formControl['releaseDate'].status;
    let status = formControl['status'].status;
    let comment = formControl['comment'].status;
    for (let i = 0; i < formControlNames.length; i++) {
      if ((frameWork && cssFramework && joinDate && releaseDate && status && comment) === 'VALID') {
        return true
      }
    }
    return false
  }

  public submitForm(formData: FormGroup) {
    this._formValue.next(formData.value);
  }
}