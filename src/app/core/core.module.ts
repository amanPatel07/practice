import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MasterComponent } from './master/master.component';
import { EmployeeService } from './services/employee.service';
import { LoginService } from './services/login.service';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MasterComponent,
    LoginComponent,
    AuthCallbackComponent
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
