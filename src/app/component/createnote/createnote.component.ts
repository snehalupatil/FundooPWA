import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
// import { ColorComponent } from '../color/color.component';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  

  constructor(private service: NoteServiceService) {}

  ngOnInit(): void {}

  form = new FormGroup({
    titleText: new FormControl(''),
    notesText: new FormControl('')
  })

  token_Id = localStorage.getItem('token');
  
  isColor:string='';
  

  getColor1 = (isColor:string) => {
    console.log(isColor);
    this.isColor = isColor;
    // let data={
    //   "color": this.isColor
    // }
    // this.service.changeColor(data, this.token_Id).subscribe((data) => {
    //   console.log(data)
    // })
  }

  onClose = () => {
    let data = {
      title: this.form.controls.titleText.value,
      description: this.form.controls.notesText.value,
      color: this.isColor,
    }
    this.service.createNote(data, this.token_Id).subscribe((data: any) => {
      console.log("Created Successfully",data);
      this.form.reset(); 
      this.isColor="white";
    }); 
    
  }

}
