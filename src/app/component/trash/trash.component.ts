
import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  
  notes:any=[];
 
  constructor( private noteService:NoteServiceService ) { 
  }

  ngOnInit(): void {
    
  }
  

}

