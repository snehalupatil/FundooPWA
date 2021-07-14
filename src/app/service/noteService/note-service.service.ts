import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../httpService/http-service.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  
  private refresh = new Subject<void>();
  
  getRefreshedData() {
    return this.refresh;
  }
  
  constructor(private httpService: HttpServiceService) {}

  url = environment.baseurl

  createNote = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/addNotes`, userData, true, token)
    .pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  getNotes = (token: any) => {
    return this.httpService.get(`${this.url}notes/getNotesList`, true, token)
  }

  updateNote = (userData: any, token: any) => {
    return this.httpService.post(`${this.url}notes/updateNotes`, userData, true, token)
  }

  }