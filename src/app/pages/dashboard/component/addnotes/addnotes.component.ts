import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.scss']
})
export class AddnotesComponent implements OnInit {

  isDataPresent:boolean = false

 


  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  setFlag(value:boolean){
    this.isDataPresent = value;
  }

  addNotes(){
    
  }
}