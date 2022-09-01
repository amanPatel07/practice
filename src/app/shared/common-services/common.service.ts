import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CommonService {

  private _apiLink: string

  constructor(private _http: HttpClient) {
    this._apiLink = environment.baseURL;
  }

  public getDepartment(): Observable<any>{
    return this._http.get(`${this._apiLink}/departments`)
  }

}
