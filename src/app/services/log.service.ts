
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from './../helper/config';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  loggerNote(data) {
    Object.assign(data, { userId: localStorage.getItem('userId') });
    return this.http.post(config.appURL + '/monitor/create', data);
  }
}
