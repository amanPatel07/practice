import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

  private _apiLink: string;

  constructor(private http: HttpClient) {
    this._apiLink = environment.baseURL;
  }

  public getUserList(): Observable<any> {
    return this.http.get<any>(`${this._apiLink}/user`)
  }

}
