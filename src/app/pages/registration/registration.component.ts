import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    confirmPassword: new FormControl('', [Validators.required])
  })

  hide: boolean = true;

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  

  // submit() {
  //   console.log(this.form.valid);
  //   if 
  //   if (this.form.valid){

  //     let data = {
  //       "firstName": this.form.controls.firstName.value,
  //       "lastName": this.form.controls.lastName.value,
  //       "email": this.form.controls.email.value,
  //       "service": "advance",
  //       "password": this.form.controls.password.value,
  //     }
  //     this.service.registration(data).subscribe((data) => {
  //       console.log(data);
  //       console.log("Registration Successful",data);

  //     })
  //   }
  // }

  submit() {
    console.log(this.form.valid); 
    if(this.form.controls.password.value == this.form.controls.confirmPassword.value){
      if (this.form.valid) {
        let data = {
          "firstName": this.form.controls.firstName.value,
          "lastName": this.form.controls.lastName.value,
          "email": this.form.controls.email.value,
          "service": "advance",
          "password": this.form.controls.password.value
        }
        this.service.registration(data).subscribe((data) => {
          console.log(data)
        })
      }
    }
    else(alert("Your Password should be same"))
  }

}