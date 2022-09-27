import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  private _userList!: any
  private _apiLink: string;
  private _checkUser: any;
  private _isloggedin: any

  constructor(
    private http: HttpClient
  ) {
    this._apiLink = environment.baseURL;
  }

  public getUser() {
    return new Promise<void>((resolve, reject) => {
      this.http.get<any>(`${this._apiLink}/user`).subscribe({
        next: (res: any) => {
          this._userList = res;
          resolve();
        },
        error: (err: any) => {
          reject(err)
        }
      })
    })
  }

  public async checkAuthentication(currentUser: any) {
    await this.getUser();
    this._checkUser = await Promise.all(this._userList.map((item: any) => {
      if ((item.userName === currentUser.userName) && (item.password == currentUser.password)) {
        this._isloggedin = true;
        return true;
      }
      else {
        this._isloggedin = false;
        return false;
      }
    }));
    this.allowUser();
  }

  public async allowUser(){
    await this._checkUser;
    console.log(this._checkUser)
    console.log(this._isloggedin)
    return this._isloggedin;
  }





}
