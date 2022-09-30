import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styles: [
  ]
})
export class MasterComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    // this._authService.completeAuth();  
  }

}
