
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StaffingFormPresenterService } from '../../staffing-form-container/staffing-form-presenter/staffing-form-presenter.service';
import { StaffingListPresenterService } from '../staffing-list-presenter/staffing-list-presenter.service';

@Component({
  selector: 'app-staffing-list-presentation',
  templateUrl: './staffing-list-presentation.component.html',
  viewProviders: [StaffingListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaffingListPresentationComponent implements OnInit {

  @Input() public set projectList(value: any | null) {
    if (value) {
      this._projectList = value
    }
  }

  public get projectList() {
    return this._projectList;
  }

  private _projectList!: any;

  constructor(private formOverlay: StaffingListPresenterService) { }

  ngOnInit(): void {
    // this.formOverlay.openForm();
  }

  public addNew() {
    this.formOverlay.openForm();
  }

}
