import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Application } from '../models/application';
import { Contact } from '../models/contact';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private auth: AuthService, private http: HttpClient) { }

  // baseUrl = 'http://localhost:8084/';
  baseUrl = environment.baseUrl;
  url = `${this.baseUrl}api/applications`;

  getHttpOptions() {
    const credentials = this.auth.getCredentials();
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': `Basic ${credentials}`
      }),
    };
    return httpOptions;
  }

  create(appid:number, contact:Contact):Observable<Contact>{
    return this.http.post<Contact>(`${this.url}/${appid}/contact`, contact, this.getHttpOptions()).pipe(
       catchError((err:any) => {
         console.error(`contact.create(): error creating contact`)
         return throwError(err);
       })
    )
  }

  update(contact:Contact, appid:number):Observable<Contact>{
    return this.http.put<Contact>(`${this.url}/${appid}/contact`, contact, this.getHttpOptions()).pipe(
       catchError((err:any) => {
         console.error(`Contact.update: error updating contact`)
         return throwError(err);
       })
    )
  }

  delete(appid:number, contactid:number){
    return this.http.delete<Contact>(`${this.url}/${appid}/contact/${contactid}`, this.getHttpOptions()).pipe(
       catchError((err:any) => {
         console.error(`Application.delete(): error deleting application`)
         return throwError(err);
       })
    )
  }

}
