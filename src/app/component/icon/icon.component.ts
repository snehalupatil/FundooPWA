import { NoteServiceService } from './../../service/noteService/note-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  isColor:string='';

  constructor(private formBuilder:FormBuilder, private noteService: NoteServiceService) { }

  @Input() noteId:any;

  ngOnInit(): void {
  }

  getcolor($isColor:string){
    console.log($isColor);
    this.isColor = $isColor;
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
