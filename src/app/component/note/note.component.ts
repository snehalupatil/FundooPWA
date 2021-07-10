
import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  
  constructor( private service: NoteServiceService ) { }
  notes = [];

  // title= "Snehal"
  // description={
  //   name:"Snehal",
  //   age:25,
  // }

  // title= "blog";
  // data={
  //   name:"Snehal",
  //   age:25,
  // }
  
 
  token_Id = localStorage.getItem('token');
  
  // note-variable

  ngOnInit(){
    this.getNotes();
    
  }

  // getnotes==token-> call api -> parent-child relation
   getNotes(){
    this.service.getNotes( this.token_Id).subscribe((data:any)=>{
      console.log(data['data'].data);
      this.notes=data['data'].data
      
    })
    
  }

}