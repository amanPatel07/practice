import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private _authService: AuthService
  ) {
    this.loginForm = this.loginFormGroup();
  }

  ngOnInit(): void {
  }

  public loginFormGroup(){
    return this.fb.group({
      userName: [],
      password: []
    })
  }

  public authenticate(){
    this._authService.checkAuthentication(this.loginForm.value);
  }

}
