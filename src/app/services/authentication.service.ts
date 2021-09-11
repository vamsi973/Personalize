import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { config } from '../helper/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<userLoginData>;
  public user: Observable<userLoginData>;
  loginR
  constructor(
    public http: HttpClient,
    public route: Router
  ) {
    this.userSubject = new BehaviorSubject<userLoginData>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable()
  }
  currentUserValue;

  login(credentials): Observable<any> {

    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.post(config.appURL + '/auth/login', credentials).pipe(map((res: userLoginData) => {
      if (res.success) {
        this.setLocalStorage(res);
        this.userSubject.next(res);
        return res;
      }
    }))
  }

  setLocalStorage(response) {
    if (!response.success) {
      return
    }
    localStorage.setItem('token', response.token);
    localStorage.setItem('username', response.data[0]['username']);
    localStorage.setItem('roleId', response.data[0]['roleId']);
    localStorage.setItem('role', response.data[0]['role']);
    localStorage.setItem('firstName', response.data['0']['firstName']);
    localStorage.setItem('lastName', response.data['0']['lastName']);
    localStorage.setItem('user', JSON.stringify(response.data['0']))
    localStorage.setItem('userId', JSON.stringify(response.data['0']['_id']))
  }
  public get userValue(): userLoginData {
    return this.userSubject.value;
  }

  logout() {
    //localStorage.removeItem('user');
    localStorage.clear();
    this.userSubject.next(null);
    this.route.navigate(['/login']);
  }
}



export interface userLoginData {
  success: boolean,
  data: any[],
  token: any
}