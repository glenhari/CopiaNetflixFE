import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Profiles } from './profiles';

@Injectable({
  providedIn: 'root'
})

export class ProfilesService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProfiles(){
    return this.http.get<Profiles>('http://localhost:50339/api/Perfils',this.httpOptions);
  }
}
