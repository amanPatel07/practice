import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MasterComponent } from './master/master.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MasterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    MasterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  providers: [
    EmployeeService,
    LoginService
  ]
})
export class CoreModule { }
