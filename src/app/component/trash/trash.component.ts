
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  @Output() ItemEvent = new EventEmitter<string>();

  trashNote:any=[];
  notes:any=[];
  note=[];
  AllNotes=[];
  
  token_Id = localStorage.getItem('token');
 
 constructor( private noteService:NoteServiceService ) { }

  ngOnInit(){
    this.getAllTrash();
    this.noteService.getRefreshedData().subscribe(() => this.getAllTrash());  
  }

   getAllTrash = () => {
    this.trashNote=this.noteService.getTrashNotes( this.token_Id).subscribe((data:any)=>{
      console.log(data['data'].data);
      this.trashNote=data['data'].data.reverse()
      this.notes=this.trashNote.filter((note:any)=>{
       return note.isDeleted==true
       })  
       console.log(this.notes);
    })
    
  }
}



