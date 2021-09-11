import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from './../helper/config';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(
    private http: HttpClient
  ) { }

  getNotes(): Observable<any> {
    return this.http.get(config.appURL + '/notes');
  }

  createNote(note) {
    return this.http.post(config.appURL + '/notes/note', note);
  }
}
