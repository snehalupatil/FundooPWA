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
  isColor:string='';
  card:any;
  color=''

  constructor(private noteService:NoteServiceService, public dialogRef: MatDialogRef<UpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any) 
    {  
      this.card=data;
      this.title = data.note.title,
      this.description = data.note.description,
      this.id = data.note.id,
      this.color= data.note.color 
    }
  
    form = new FormGroup({
      title: new FormControl(this.data.note.title),
      description: new FormControl(this.data.note.description)
    })

  ngOnInit(): void {
  }
  token_Id = localStorage.getItem('token');

  // getColor1 = (isColor:string) => {
  //   console.log(isColor);
  //   this.isColor = isColor;
  // }
  

  updateNote(){
    let data = {
      title: this.form.controls.title.value,
      description: this.form.controls.description.value,
      noteId: this.id,
      color: this.isColor
    }
    console.log(data);
    this.noteService.updateNote(data,this.token_Id).subscribe((response:any) => {
      console.log(" updated successfull", response);
      this.dialogRef.close(data);
    })
  }

  getColor2(isColor: any){
    console.log(isColor)
    this.color=isColor;
    let data={
      color: isColor,
      noteIdList:[this.id]
      
    }
    this.noteService.changeColor(data,this.token_Id).subscribe((response:any) => {
      console.log("Color changed Successfully",response);
    })
  }

}