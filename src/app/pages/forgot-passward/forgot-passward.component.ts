import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userService/user-service.service';


@Component({
  selector: 'app-forgot-passward',
  templateUrl: './forgot-passward.component.html',
  styleUrls: ['./forgot-passward.component.scss']
})
export class ForgotPasswardComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)])
  })

  submit() {
    console.log(this.forgotPasswordForm.valid); 
    if (this.forgotPasswordForm.valid) {
      let data = {
        "service": "advance",
        "email": this.forgotPasswordForm.controls.email.value,    
      }
      this.service.forgotPassward(data).subscribe(( data ) => {
        console.log(data)
      })
    }
  }

  ngOnInit(): void {
  }

}
