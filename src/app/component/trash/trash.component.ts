
import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  
  trashNote:any=[];
  notes:any=[];
  note=[];
  AllNotes=[];
  
  token_Id = localStorage.getItem('token');
 
  constructor( private noteService:NoteServiceService ) { 
    this.trashNote=this.noteService.getTrashNotes(this.token_Id).subscribe((response:any)=>{
        this.trashNote=response['data'].data
        this.notes=this.trashNote.filter((note:any)=>{
        
            return note.isDeleted==true
          })
          console.log(this.notes);
      })
   }

  ngOnInit(): void {
    
  }
  

}

