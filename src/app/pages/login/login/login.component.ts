import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })
  
  get f() {
    return this.loginForm.controls;
  }

  submit() {
    console.log(this.loginForm.valid); 
    if (this.loginForm.valid) {
      let data = {
        "email": this.loginForm.controls.email.value,
        "service": "advance",
        "password": this.loginForm.controls.password.value,
      }
      this.service.login(data).subscribe((data) => {
        console.log(data)
      })
    }
  }
  
  ngOnInit(): void {
  }

}