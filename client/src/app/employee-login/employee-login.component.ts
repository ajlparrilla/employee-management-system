import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  loginForm: FormGroup=new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private _router:Router, private _employee: EmployeeService) { }

  ngOnInit(): void {
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._employee.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data), this._router.navigate(['/employee/page'])},
      error=>console.error(error)
    )
  }
}
