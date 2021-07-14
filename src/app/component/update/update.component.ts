import { Component, OnInit } from '@angular/core';

import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  title;
  description;
  
  constructor(private noteService:NoteServiceService, public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) 
    { 
      this.title = data.note.title,
      this.description = data.note.description
  }
  
  ngOnInit(): void {
  }
  token_Id = localStorage.getItem('token');
  updateNote(){
   
    let data = {
      title: this.title,
      description: this.description, 
    }
    this.dialogRef.close(data);
    this.noteService.updateNote(data,this.token_Id).subscribe((response:any) => {
      console.log(" updated successfull", response);
    })
  }

}