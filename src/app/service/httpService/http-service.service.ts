import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor(private httpClient : HttpClient) { }

  post(url: string, data: any, isHeaderRequired: any = false, headders = null){
    console.log(data, url);
    return this.httpClient.post(url, data, isHeaderRequired && Headers)
  }

  
}
