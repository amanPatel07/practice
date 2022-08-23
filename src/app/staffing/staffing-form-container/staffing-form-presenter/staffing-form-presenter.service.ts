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
      projectName: ['', Validators.required ],
      projectLead: ['', Validators.required ],
      moduleLead: ['', Validators.required ],
      description: ['', Validators.required ],
      secondForm: [''],
      frameWork: ['', Validators.required ],
      cssFramework: ['', Validators.required ],
      joinDate: ['', Validators.required ],
      releaseDate: ['', Validators.required ],
      status: ['', Validators.required ],
      comment: ['', Validators.required ],
      thirdForm: ['']
    })
  }

  public submitForm(formData:FormGroup){
    this._formValue.next(formData.value);
  }
}
