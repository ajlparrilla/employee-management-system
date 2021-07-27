import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorLoginComponent } from './administrator-login/administrator-login.component';
import { AdministratorPageComponent } from './administrator-page/administrator-page.component';
import { AdministratorRegisterComponent } from './administrator-register/administrator-register.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { HomeComponent } from './home/home.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { StaffPageComponent } from './staff-page/staff-page.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'administrator/login', component: AdministratorLoginComponent },
  { path: 'administrator/register', component: AdministratorRegisterComponent },
  { path: 'administrator/page', component: AdministratorPageComponent },
  { path: 'administrator/page/edit/:id', component: EditStaffComponent },
  { path: 'staff/login', component: StaffLoginComponent },
  { path: 'staff/page', component: StaffPageComponent },
  { path: 'staff/page/edit/:id', component: EditEmployeeComponent },
  { path: 'employee/login', component: EmployeeLoginComponent },
  { path: 'employee/page', component: EmployeePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
