import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';


@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor(private httpService: HttpServiceService) { }

  url = environment.baseurl

  createNote = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/addNotes`, userData, true, token)
  }

}