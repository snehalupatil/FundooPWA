import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {}

  logout(){}


  // evaluateRoute(){
    
  //   switch(){
  //     case "notesClicked()":
  //       return this.router.navigate(["/dashboard"])
  //     break;
  //     case "archieveClick()":
  //       return this.router.navigate(['/archieve'])
  //       break;
  //     case "trashClick()":
  //       return this.router.navigate(['/dashboard/trash'])
  //       break;
  //   }
  // }

  switchClick = 1

  notesClicked(){
    return this.switchClick = 1;
  }

  trashClick(){
    return this.switchClick = 2;
  }

  archieveClick(){
    return this.switchClick = 3;
  }

}
