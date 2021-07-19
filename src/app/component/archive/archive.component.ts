import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
 
  archieveNote:any=[];
  notes:any=[];
  note=[];
  AllNotes=[];
  
  token_Id = localStorage.getItem('token');
 
 constructor( private noteService:NoteServiceService ) { }

  ngOnInit(){
    this.getAllArchieve();
    this.noteService.getRefreshedData().subscribe(() => this.getAllArchieve());  
  }

   getAllArchieve(){
    this.archieveNote=this.noteService.getAllArchieve( this.token_Id).subscribe((data:any)=>{
      console.log(data['data'].data);
      this.archieveNote=data['data'].data.reverse()
      this.archieveNote=this.archieveNote.filter((note:any)=>{
       return note.isArchieved == true
       })  
       console.log(this.notes);
    })
    
  }
}
