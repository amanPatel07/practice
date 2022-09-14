import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { StaffDetails } from 'src/app/staffing/model/staffing.model';
import { EmployeeDetails, StaffedProject } from '../../model';

@Injectable()
export class EmployeeListPresenterService {

  private _sortedList: Subject<EmployeeDetails[]>;
  public sortedList$: Observable<EmployeeDetails[]>;

  constructor(private fb: FormBuilder) {
    this._sortedList = new Subject();
    this.sortedList$ = new Observable();
    this.sortedList$ = this._sortedList.asObservable();
  }

  public buildForm() {
    return this.fb.group({
      sortBy: ['all']
    })
  }

  public filter(form: any, employeeList: EmployeeDetails[]) {
    let sortorder = form
    let list = employeeList.map((item: any) => item)
    let sorted: EmployeeDetails[] = [];
    console.log(form);
    
    if (sortorder.sortBy === 'available') {
      list.forEach((element: any) => {
        let staffDetails = element.staffProjectId.map((item: any) => item.hourSpend)
        let totalHours = staffDetails.reduce((pre: any, cur: any) => pre + cur);
        if (totalHours < 40) {
          sorted.push(element)
        }
      })
      // console.log(sorted)
      this._sortedList.next(sorted);
    }
    else if (sortorder.sortBy === 'staffed') {
      list.forEach((element: any) => {
        let staffDetails = element.staffProjectId.map((item: any) => item.hourSpend)
        let totalHours = staffDetails.reduce((pre: any, cur: any) => pre + cur);
        if (totalHours >= 40) {
          sorted.push(element)
        }
      })
      // console.log(sorted)
      this._sortedList.next(sorted);
    }

    else {
      this._sortedList.next(list)
    }
  }

}
