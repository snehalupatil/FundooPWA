import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/userService/user-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private userServices : UserServiceService, private Router : Router){ 
  }

  canActivate():boolean
  {
    if (this.userServices.loggedIn()) {
      return true;
  }else{
  this.Router.navigate(['/login']);
  return false;
  }
}
}
