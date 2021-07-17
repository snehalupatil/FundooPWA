import { NoteServiceService } from './../../service/noteService/note-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  isColor:string='';
  id: any;

  constructor(private formBuilder:FormBuilder, private noteService: NoteServiceService ) { }

  @Input() noteId:any;
  @Output() ItemEvent1 = new EventEmitter<string>();
  
  token_Id = localStorage.getItem('token');

  ngOnInit(): void {
  }

  getColor($isColor:string){
    console.log($isColor);
    this.isColor = $isColor;
    this.ItemEvent1.emit(this.isColor)
  }

  deleteNote(){
    console.log(this.noteId);
    let data = {
      noteIdList:[this.noteId],
      isDeleted:true
    }
    this.noteService.deleteNotes(data, this.token_Id).subscribe((response:any)=>{
      console.log("Deleted Successfully");
    });
  }
  
}
