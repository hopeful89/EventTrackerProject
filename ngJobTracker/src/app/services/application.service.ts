import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Application } from '../models/application';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  // baseUrl = 'http://localhost:8084/';//local
  baseUrl = environment.baseUrl;
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
  count(){
    return this.http.get(`${this.baseUrl}applications`).pipe(
       catchError((err:any) => {
         console.error(`Application.count(): error getting applications`)
         return throwError(err);
       })
    )
  }

  singleApp(id:number):Observable<Application>{
    return this.http.get<Application>(`${this.url}/${id}`, this.getHttpOptions()).pipe(
       catchError((err:any) => {
         console.error(`Application.singleApp(): error getting single application`)
         return throwError(err);
       })
    )
  }

  create(app:Application):Observable<Application>{
    return this.http.post<Application>(this.url, app, this.getHttpOptions()).pipe(
       catchError((err:any) => {
         console.error(`Application.create(): error creating application`)
         return throwError(err);
       })
    )
  }

  update(app:Application):Observable<Application>{
    return this.http.put<Application>(this.url, app, this.getHttpOptions()).pipe(
       catchError((err:any) => {
         console.error(`Application.update: error updaintg application`)
         return throwError(err);
       })
    )
  }

  delete(id:number){
    return this.http.delete<Application>(`${this.url}/${id}`, this.getHttpOptions()).pipe(
       catchError((err:any) => {
         console.error(`Application.delete(): error deleting application`)
         return throwError(err);
       })
    )
  }
}
