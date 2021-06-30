import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(1)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(1)]),
    password: new FormControl('', [Validators.required, Validators.minLength(1)])
  })

  hide: Boolean = false

  ngOnInit(): void {
  }

  get f() {
    return this.form.controls;
  }

  

  submit() {
    console.log(this.form);
  }

}


