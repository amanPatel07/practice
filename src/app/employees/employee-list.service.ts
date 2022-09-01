import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmployeeListService {

  private _apiLink: string

  constructor(private _http: HttpClient) {
    this._apiLink = environment.baseURL;
  }

  /**
   * @name getEmployeesList
   * @param departmentId Department Id 
   * @description An API service call for the employee list by department. 
   * @returns Observable 
   */
  public getEmployeesList(departmentId: any): Observable<any> {
    return this._http.get(`${this._apiLink}/departments/${departmentId}`).pipe(map((res:any)=>res))
  }
}
