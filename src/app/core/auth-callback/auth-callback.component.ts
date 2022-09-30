import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styles: [
  ]
})
export class AuthCallbackComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this._auth.completeAuth();
  }

}
