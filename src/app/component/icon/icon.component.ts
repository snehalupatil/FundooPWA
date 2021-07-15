import { NoteServiceService } from './../../service/noteService/note-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  isColor:string='';

  constructor(private formBuilder:FormBuilder, private noteService: NoteServiceService) { }

  ngOnInit(): void {
  }

  getcolor($isColor:string){
    console.log($isColor);
    this.isColor = $isColor;
  }
}
