import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  private _userList!: any
  private _apiLink: string;
  private _checkUser: any;
  private _isloggedin: any

  constructor(
    private http: HttpClient,
    private _route: Router
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
    this._userList.map((item: any) => {
      if((item.userName === currentUser.userName) && (item.password === parseInt(currentUser.password))){
        this._isloggedin = true;
        localStorage.setItem('user', this._isloggedin);
      }
      else{
        this._isloggedin = false;
        localStorage.setItem('user', this._isloggedin);
      }
    })
    console.log(typeof(localStorage.getItem('user')))
  }

  public completeAuth(){
    let userStatus = localStorage.getItem('user');
    if(userStatus === 'true'){
      this._route.navigate(['/'])
    }
    else{
      this._route.navigate(['login'])
    }
  }
}

// return await new Promise<void>((resolve, reject) => {
//   this._userList.map((item: any) => {
//     if ((item.userName === currentUser.userName) && (item.password === parseInt(currentUser.password))) {
//       this._isloggedin = true;
//       localStorage.setItem('user', this._isloggedin);
//       resolve();
//     }
//     else {
//       this._isloggedin = false;
//       localStorage.setItem('user', this._isloggedin);
//       reject();
//     }
//   });
// });