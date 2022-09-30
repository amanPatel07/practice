import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { StaffingService } from '../staffing.service';

@Component({
  selector: 'app-staffing-list-container',
  templateUrl: './staffing-list-container.component.html',
})
export class StaffingListContainerComponent implements OnInit {

  public projectList$: Observable<any>;

  constructor(private _service: StaffingService) {
    this.projectList$ = new Observable();
  }

  ngOnInit(): void {
    this.projectList$ = this._service.getProjectList();
  }


}
