import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  
  notes:any=[];
  type:string='trash'



  constructor( private noteService:NoteServiceService ) { 
  }

  ngOnInit(): void {
    this.getTrashNotes();
  }
  
  getTrashNotes(){
    this.noteService.getTrashNotes().subscribe((response:any) => {
      this.notes=response['data']['data'];
      console.log("array:",this.notes)},
    );
  }
}

