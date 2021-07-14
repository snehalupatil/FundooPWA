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
  @Input() notes: any;
  card: any;
  
  // changeText:boolean;
  
  constructor( private noteService:NoteServiceService, public dialog: MatDialog) { 
    // this.changeText=false
  }

  ngOnInit(): void {
    console.log(this.notes)  
  }

  openDialog(card:any):void{
     this.card=card;
     const dialogRef = this.dialog.open(UpdateComponent, { 
      data: {note: card}
     })
   }

}