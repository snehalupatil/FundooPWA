import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NoteServiceService } from 'src/app/service/noteService/note-service.service';
// import { subject } from 'RXJS'

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

  onClose = () => {
    let data = {
      title: this.form.controls.titleText.value,
      description: this.form.controls.notesText.value,
    }
    this.service.createNote(data, this.token_Id).subscribe((data: any) => {
      console.log(data);
    });
  }

  // togglePin() {
  //   this.service
  //     .togglePin({ isPined: !this.notes.isPined, noteIdList: [this.notes.id] })
  //     // .subscribe(
  //     //   (data) => console.log('success'),
  //     //   (error) =>
  //     //     this.snackBar.open('Error unpinning!', '', {
  //     //       duration: 2000,
  //     //     })
  //     // );
  // }
 
}
