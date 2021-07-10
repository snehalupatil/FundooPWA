import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';


@Component({
  selector: 'app-displaynode',
  templateUrl: './displaynode.component.html',
  styleUrls: ['./displaynode.component.scss']
})
export class DisplaynodeComponent implements OnInit {
  @Input() notes: any;
  

  constructor( ) { 
    
  }


  ngOnInit(): void {
    console.log(this.notes)
  }

  
  
}

