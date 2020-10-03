import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Titulos } from './titulos';

@Injectable({
  providedIn: 'root'
})
export class TitulosService {

  constructor(
    private http: HttpClient
  ) { }

  items;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text' as 'json' 
  }

  getTitulos(){

    return this.http
    .get<Titulos>('http://localhost:50339/api/titulos',this.httpOptions);
  }
}
