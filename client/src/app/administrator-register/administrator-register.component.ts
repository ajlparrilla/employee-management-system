import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministratorService } from '../administrator.service';

@Component({
  selector: 'app-administrator-register',
  templateUrl: './administrator-register.component.html',
  styleUrls: ['./administrator-register.component.css']
})
export class AdministratorRegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    fullname: new FormControl(null, [Validators.required]),
    position: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(private _router:Router, private _administratorService: AdministratorService) { }

  ngOnInit(): void {
  }

  register(){
    if(!this.registerForm.valid){
      console.log('Invalid form'); return;
    }

    this._administratorService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data => {console.log(JSON.stringify(this.registerForm.value)); this._router.navigate(['/administrator/login'])},
      error => console.log(error)
    )
  }
}