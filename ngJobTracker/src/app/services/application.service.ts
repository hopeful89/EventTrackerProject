import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  baseUrl = 'http://localhost:8084/';
  url = `${this.baseUrl}/api/applications`;

  constructor(private http: HttpClient) { }

  index():Observable<Application[]>{
    return this.http.get<Application[]>(this.url).pipe(
       catchError((err:any) => {
         console.error(`Application.index(): error getting applications`)
         return throwError(err);
       })
    )
  }
}
