import { Component, OnInit } from '@angular/core';

import { Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  title;
  description;
  id;

  constructor(private noteService:NoteServiceService, public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) 
    {  
      this.title = data.note.title,
      this.description = data.note.description,
      this.id = data.note.id    
    }
  
    form = new FormGroup({
      title: new FormControl(this.data.note.title),
      description: new FormControl(this.data.note.description)
    })

  ngOnInit(): void {
  }
  token_Id = localStorage.getItem('token');

  updateNote(){
    let data = {
      noteId: this.id,
      title: this.form.controls.title.value,
      description: this.form.controls.description.value
    }
    console.log(data);
    this.noteService.updateNote(data,this.token_Id).subscribe((response:any) => {
      console.log(" updated successfull", response);
      this.dialogRef.close(data);
    })
  }

}