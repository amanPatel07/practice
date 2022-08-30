import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StaffingService } from '../staffing.service';

@Component({
  selector: 'app-staffing-list-container',
  templateUrl: './staffing-list-container.component.html',
})
export class StaffingListContainerComponent implements OnInit {

  public staffDetails$: Observable<any>;

  constructor(private _service: StaffingService) {
    this.staffDetails$ = new Observable();
  }

  ngOnInit(): void {
    // this.staffDetails$ = this._service.getStaffDetails();
  }


}
