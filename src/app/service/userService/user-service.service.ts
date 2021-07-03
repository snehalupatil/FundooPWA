import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private httpService : HttpServiceService ) { }
  url = environment.baseurl

  registration = (data : any) => {
    console.log("Data in User Service",data);
    return this.httpService.post(`${this.url}user/userSignUp`, data)
  }

  login = (data: any) => {
     console.log("Data in User Service",data);
    return this.httpService.post(`${this.url}user/login`, data)
  }

  forgotPassward = (data: any) => {
    console.log("Data in User Service",data);
    return this.httpService.post(`${this.url}user/reset`, data)
  }

  password = (data: any, token: any) => {
     console.log("Data in User Service",data);
    return this.httpService.post(`${this.url}user/reset-password`, data, true, token)
  }

}
