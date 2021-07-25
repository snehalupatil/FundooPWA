import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  update: boolean = false

  constructor(private service: UserServiceService, private router: Router, updates: SwUpdate) { 
    updates.available.subscribe(event => {
      // this.update = true;
      updates.activateUpdate().then(() => document.location.reload());
    })
  }
  

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })


  
  get f() {
    return this.loginForm.controls;
  }

  submit() {
    console.log(this.loginForm); 
    if (this.loginForm.valid) {
      let data = {
        "email": this.loginForm.controls.email.value,
        "service": "advance",
        "password": this.loginForm.controls.password.value
      }
      this.service.login(data).subscribe((data: any) => {
        console.log(data)

        localStorage.setItem("username", data["firstName "]+data["lastName"]);
        localStorage.setItem("email", data["email"]);
        localStorage.setItem("token", data["id"]);
        if ( data['id'] != null ){
        this.router.navigate(['/dashboard']);
        
        }
      })
    }
  }
  
  hide: boolean = true;
  ngOnInit(): void {
  }

}