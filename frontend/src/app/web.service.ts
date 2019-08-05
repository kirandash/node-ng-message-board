import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  getMessages(){
    return this.http.get('http://localhost:1234/api/messages').toPromise(); // By default http.get returns an observable. We will convert it to promise. Since easy
  }
}
