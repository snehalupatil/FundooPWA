import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  constructor( private service: NoteServiceService ) { }
  notes = [].reverse();
 
  token_Id = localStorage.getItem('token');

  ngOnInit(){
    this.getAllNotes();
    this.service.getRefreshedData().subscribe(() => this.getAllNotes());  
  }

   getAllNotes(){
    this.service.getNotes( this.token_Id).subscribe((data:any)=>{
      console.log(data['data'].data);
      this.notes=data['data'].data.reverse()  
    })
    
  }

}