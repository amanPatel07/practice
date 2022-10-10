import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/model';
import { StaffingService } from '../staffing.service';

@Component({
  selector: 'app-staffing-form-container',
  templateUrl: './staffing-form-container.component.html'
})
export class StaffingFormContainerComponent implements OnInit {

  @Input() public set projectId(value: any | null) {
    if (value) {
      this._projectId = value;
    }
  }
  public get projectId() {
    return this._projectId
  }
  private _projectId: any

  @Input() public set employeeNameList(value: any) {
    if (value) this._employeeNameList = value;
  }
  public get employeeNameList(): any {
    return this._employeeNameList;
  }
  private _employeeNameList!: any;

  @Output() closeOverlay: EventEmitter<Event>;

  public project$: Observable<Project>;
  public employeeList: EventEmitter<Input>
  public getPMList$: Observable<any>;

  constructor(private _staffingService: StaffingService) {
    this.closeOverlay = new EventEmitter();
    this.project$ = new Observable();
    this.employeeList = new EventEmitter();
    this.getPMList$ = new Observable();
  }

  ngOnInit(): void {
    this.project$ = this._staffingService.getProject(this.projectId);
    this.employeeList = this._employeeNameList;
    this.getPMList$ = this._staffingService.getPMList();
  }

  public onCancel(event: any) {
    this.closeOverlay.emit();
  }

}