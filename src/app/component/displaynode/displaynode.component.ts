import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
import { UserServiceService } from 'src/app/service/userService/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdateComponent } from '../update/update.component';



@Component({
  selector: 'app-displaynode',
  templateUrl: './displaynode.component.html',
  styleUrls: ['./displaynode.component.scss']
})
export class DisplaynodeComponent implements OnInit {
  
  card: any;
 
  constructor( private noteService:NoteServiceService, public dialog: MatDialog) { 
  }

  @Input() notes: any;
  
  @Output() noteId = new EventEmitter<any>();
  
  token_Id = localStorage.getItem('token');

  isColor:string='';

  ngOnInit(): void {
    console.log(this.notes)  
  }

  openDialog(card:any):void{
     this.card=card;
     const dialogRef = this.dialog.open(UpdateComponent, { 
      data: {note: card}
     })
   }
  

   getColor1($isColor: any){
     console.log($isColor,this.notes)
     this.isColor= $isColor
    //  let data={
    //   //  color: isColor,
    //    noteIdList:[this.notes.id]  
    //  }
    //  this.noteService.changeColor(data,this.token_Id).subscribe((response:any) => {
    //    console.log("Color changed Successfully",response);
    //  })
   }

}

