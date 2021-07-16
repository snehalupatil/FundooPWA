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

  constructor(private formBuilder:FormBuilder, private noteService: NoteServiceService) { }

  @Input() noteId:any;
  @Output() ItemEvent1 = new EventEmitter<string>();

  ngOnInit(): void {
  }

  getColor($isColor:string){
    console.log($isColor);
    this.isColor = $isColor;
    this.ItemEvent1.emit(this.isColor)
  }

  deleteNote(){
    console.log(this.noteId);
    // this.noteId.emit(this.note);
    let data = {
      noteIdList:[this.noteId],
      isDeleted:true
    }
    this.noteService.deleteNotes(data).subscribe((response:any)=>{
      console.log("Deleted Successfully");
    });
  }
  
}
