import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Application } from '../models/application';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  baseUrl = 'http://localhost:8084/';
  url = `${this.baseUrl}api/user/applications`;

  constructor(private http: HttpClient, private auth: AuthService) { }

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

  index():Observable<Application[]>{
    return this.http.get<Application[]>(this.url, this.getHttpOptions()).pipe(
       catchError((err:any) => {
         console.error(`Application.index(): error getting applications`)
         return throwError(err);
       })
    )
  }
  create(app:Application):Observable<Application>{
    return this.http.post<Application>(this.url, app, this.getHttpOptions()).pipe(
       catchError((err:any) => {
         console.error(`Application.index(): error getting applications`)
         return throwError(err);
       })
    )
  }
}
