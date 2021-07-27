import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AdministratorService } from '../administrator.service';

@Component({
  selector: 'app-administrator-login',
  templateUrl: './administrator-login.component.html',
  styleUrls: ['./administrator-login.component.css']
})
export class AdministratorLoginComponent implements OnInit {

  loginForm: FormGroup=new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })

  constructor(private _router:Router, private _administrator: AdministratorService) { }

  ngOnInit(): void {
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._administrator.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data), this._router.navigate(['/administrator/page'])},
      error=>console.error(error)
    )
  }

}
