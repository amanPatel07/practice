import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Department, Project } from '../shared/model';

@Injectable()
export class StaffingService {

  private _apiLink: string;

  constructor(private http: HttpClient) {
    this._apiLink = environment.baseURL;
  }

  public getProjectList(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this._apiLink}/projects`)
  }

  public getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this._apiLink}/projects/${id}`);
  }

  public getEmployeeCount(): Observable<Department> {
    return this.http.get<Department>(`${this._apiLink}/departments`);
  }

  public getPMList(): Observable<any>{
    return this.http.get<any>(`${this._apiLink}/pmList`);
  }

}