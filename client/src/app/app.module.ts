import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorLoginComponent } from './administrator-login/administrator-login.component';
import { AdministratorPageComponent } from './administrator-page/administrator-page.component';
import { AdministratorRegisterComponent } from './administrator-register/administrator-register.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministratorService } from './administrator.service';
import { HttpClientModule } from '@angular/common/http';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministratorLoginComponent,
    AdministratorPageComponent,
    AdministratorRegisterComponent,
    HomeComponent,
    FooterComponent,
    StaffPageComponent,
    EmployeePageComponent,
    EmployeeLoginComponent,
    StaffLoginComponent,
    EditStaffComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdministratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
