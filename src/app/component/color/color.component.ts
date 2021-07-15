
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  
  isColor:string='';

  constructor(private noteService: NoteServiceService) { }

  ngOnInit(): void {
  }

  colors=['#FBBC04', '#f28b82','#fbbc04','#fff475','#ccff90','#a7ffeb','#cbf0f8','#aecbfa','#fdcfe8','#e6c9a8']

  @Output() ItemEvent = new EventEmitter<string>();


  getColor = (colorCode:string) => {
    this.ItemEvent.emit(colorCode);
    // this.color=color;
  //   let data={
  //     color :this.isColor,
  // }
  // this.noteService.changeColor(data).subscribe((data:any) => {
  //   console.log("Color changed successfully", data);
  // });
}

//Trash--
// let noteData = {
//   noteIdList: [props.noteId],
//   isDeleted: true,
// };
// let noteData = {
//   noteIdList: [props.noteId],
//   isArchieved: true,
// };
// this is for archieve


}
