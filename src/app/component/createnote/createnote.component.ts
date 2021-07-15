import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
// import { ColorComponent } from '../color/color.component';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  isColor:string='';

  constructor(private service: NoteServiceService) {}

  ngOnInit(): void {}

  form = new FormGroup({
    titleText: new FormControl(''),
    notesText: new FormControl('')
  })

  token_Id = localStorage.getItem('token');

  getColor = (isColor:string) => {
    console.log(isColor);
    this.isColor=isColor;
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
      // get api= dat sharing=> child-parent 
    });
    
  }

}
