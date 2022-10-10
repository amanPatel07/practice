import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { FIRST_FORM_TITLE, SECOND_FORM_TITLE, THIRD_FORM_TITLE } from 'src/app/shared/constants';

@Injectable()
export class StaffingFormPresenterService {

  private _formValue: Subject<any>
  public formValue$: Observable<any>

  constructor(private fb: FormBuilder) {
    this._formValue = new Subject();
    this.formValue$ = new Observable();
    this.formValue$ = this._formValue.asObservable();
  }
  /**
   * @method formBuild
   * @description The form group with the form controls
   * @returns Form Group
   */
  public formBuild() {
    return this.fb.group({
      
    })
  }

  public submitForm(formData: FormGroup) {
    this._formValue.next(formData.value);
  }
}