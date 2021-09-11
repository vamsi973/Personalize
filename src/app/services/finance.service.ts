import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { config } from '../helper/config';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(
    private http: HttpClient
  ) { }

  spendingTypes(): Observable<any> {
    return this.http.get(config.appURL + '/budget/getSpendingList');
  }

  getTags(): Observable<any> {
    return this.http.get(config.appURL + '/budget/getTags');
  }

  getReport(): Observable<any> {
    return this.http.get(config.appURL + '/notes');
  }

  createReport(record) :Observable<any> {
    return this.http.post(config.appURL + '/budget/insertSpending', record);
  }

}
