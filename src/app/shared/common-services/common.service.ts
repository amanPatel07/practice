import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Department } from 'src/app/employees/model';
import { environment } from 'src/environments/environment';
import { Employee, Project } from '../model';

@Injectable()
export class CommonService {

  private _apiLink: string

  constructor(private _http: HttpClient) {
    this._apiLink = environment.baseURL;
  }

  public getDepartment(): Observable<any>{
    return this._http.get(`${this._apiLink}/departments`)
  }
  
  public getDepartmentById(departmentId: number, employeeId: number): Observable<Department>{
    return this._http.get(`${this._apiLink}/departments/${departmentId}`).pipe(map((res:any)=> res.employee.find((item: Employee) => item.employeeId === employeeId )))
  }

  public getProject(): Observable<Project>{
    return this._http.get<Project>(`${this._apiLink}/projects`)
  }
  

}
