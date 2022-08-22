import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class StaffingFormPresenterService {

  private _formValue: Subject<any>
  public formValue$: Observable<any>

  constructor(private fb: FormBuilder) {
    this._formValue = new Subject();
    this.formValue$ = new Observable();
    this.formValue$ = this._formValue.asObservable();
  }

  public formBuild() {
    return this.fb.group({
      developerName: [ '', Validators.required ],
      contactNumber: [ '', Validators.required ],
      email: [ '', Validators.required ],
      developerId: [ '', Validators.required ],
      designation: [ '', Validators.required ],
      firstForm: [''],
      projectName: [''],
      projectLead: [''],
      moduleLead: [''],
      description: [''],
      secondForm: [''],
      frameWork: [''],
      cssFramework: [''],
      joinDate: [''],
      releaseDate: [''],
      status: [''],
      comment: [''],
      thirdForm: ['']
    })
  }

  public submitForm(formData:FormGroup){
    this._formValue.next(formData.value);
  }
}
