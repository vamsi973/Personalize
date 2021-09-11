import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './../helper/config';
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {

    constructor(private readonly http: HttpClient){
    }
    
}