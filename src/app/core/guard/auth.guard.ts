import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private _authService: AuthService, private _route: Router) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkAuthenicate()
  }

  public checkAuthenicate() {
    let userLogged = localStorage.getItem('user');
    if(userLogged === 'true'){
      return true;
    }
    else{
      return false;
    }
  }
}