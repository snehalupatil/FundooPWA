import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {

  constructor(private service: UserServiceService, private route: ActivatedRoute) { }

  forgotEmailForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.minLength(3)]),
    newConfirmPassword: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  token: any
   
  ngOnInit(): void {
    console.log(this.route.snapshot.params.token)
    this.token = this.route.snapshot.params.token;
  }
  submit() {
    console.log(this.forgotEmailForm.valid); 
    if (this.forgotEmailForm.valid) {
      let data = {
        "newPassword": this.forgotEmailForm.controls.newPassword.value,
        "service": "advance",
        "newConfirmPassword": this.forgotEmailForm.controls.newConfirmPassword.value,
      }
      this.service.password(data, this.token).subscribe((data) => {
        console.log(data)
      })
    }
  }

}
