import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { __awaiter } from 'tslib';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup
  public isLoggedIn: any

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private route: Router
  ) {
    this.loginForm = this.loginFormGroup();
  }

  ngOnInit(): void {
    // if(localStorage.getItem('user') === 'true'){
    //   this.route.navigate(['/'])
    // }
  }

  public loginFormGroup(){
    return this.fb.group({
      userName: [],
      password: []
    })
  }

  public async authenticate(){
    await this._authService.checkAuthentication(this.loginForm.value);
    this.route.navigate(['auth'])
  }

}
