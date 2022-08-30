import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable()
export class StaffingService {

  private _apiLink: string;

  constructor(private http: HttpClient) {
    this._apiLink = environment.baseURL;
  }

  // public getStaffDetails(): Observable<any>{
  //   return this.http.get<any>(`${this._apiLink}/staffDetails`)
  // }

}