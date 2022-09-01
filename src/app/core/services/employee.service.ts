import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class EmployeeService {

  private _departmentId: BehaviorSubject<any>;
  public departmentId$: Observable<any>

  constructor(private http: HttpClient) {
    this._departmentId = new BehaviorSubject(1);
    this.departmentId$ = new Observable();
    this.departmentId$ = this._departmentId.asObservable();
  }

  public department(id:any){
    this._departmentId.next(id);
  }
}
