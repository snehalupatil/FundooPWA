import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @Output() ItemEvent = new EventEmitter<string>();
 
  archieveNote:any=[];
  notes:any=[];
  
  token_Id = localStorage.getItem('token');
 
 constructor( private noteService:NoteServiceService ) { }

  ngOnInit(){
    this.getAllArchieve();
    this.noteService.getRefreshedData().subscribe(() => this.getAllArchieve());  
  }

   getAllArchieve(){
     console.log("Archive Notes")
    this.archieveNote=this.noteService.getAllArchieve( this.token_Id).subscribe((data:any)=>{
      console.log(data['data'].data);
      this.notes=data['data'].data.reverse()
    })
    
  }
}
