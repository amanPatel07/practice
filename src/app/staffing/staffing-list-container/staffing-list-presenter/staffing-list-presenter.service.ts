import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { CommonService } from 'src/app/shared/common-services/common.service';
import { Employee, StaffedProject } from 'src/app/shared/model';
import { StaffingFormContainerComponent } from '../../staffing-form-container/staffing-form-container.component';
import { StaffingFormPresentationComponent } from '../../staffing-form-container/staffing-form-presentation/staffing-form-presentation.component';

@Injectable()
export class StaffingListPresenterService {

  constructor(private overLay: Overlay) { }

  public openForm(id?: number, employeeNameList?: any) {
    const overLayRef = this.overLay.create({
      hasBackdrop: true,
      positionStrategy: this.overLay.position().global().centerHorizontally().centerVertically()
    });
    const overlayComponent = new ComponentPortal(StaffingFormContainerComponent);
    const componentRef = overLayRef.attach(overlayComponent)
    overLayRef.backdropClick().subscribe(() => {
      overLayRef.detach()
    });
    componentRef.instance.closeOverlay.subscribe(() => overLayRef.detach());
    componentRef.instance.projectId = id;
    componentRef.instance.employeeNameList = employeeNameList;
  }

  public getEmployeeCountinProject(projectId: number, employeeList: any) {
    let employeeCount = 0;
    let employeeNameList:string[] = [];
    employeeList.forEach((item: Employee) => {
      employeeNameList.push(item.employeeName)
      item.staffProjectId.filter((element: StaffedProject) => {
        if (element.projectId === projectId) employeeCount++;
      })
    });
    return {employeeCount, employeeNameList};
  }

}
