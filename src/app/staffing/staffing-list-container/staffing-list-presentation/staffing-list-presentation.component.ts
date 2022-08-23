
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

  @Input() public set staffDetails(value: any | null) {
    if (value) {
      this._staffDetails = value
    }
  }

  public get staff() {
    return this._staffDetails;
  }

  private _staffDetails!: any;

  constructor(private formOverlay: StaffingListPresenterService) { }

  ngOnInit(): void {
    // this.formOverlay.openForm();
  }

  public addNew() {
    // this.router.navigate(['staffing/staffing-form'])
    this.formOverlay.openForm();
  }

}
