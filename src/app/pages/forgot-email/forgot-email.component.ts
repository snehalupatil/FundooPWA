import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userService/user-service.service';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {

  constructor() { }

  forgotEmailForm = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  submit(){
    console.log(this.forgotEmailForm);
  }

  ngOnInit(): void {
  }

}
