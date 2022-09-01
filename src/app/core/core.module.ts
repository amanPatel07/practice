import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    MasterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  providers: [
    EmployeeService
  ]
})
export class CoreModule { }
