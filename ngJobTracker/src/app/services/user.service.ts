import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: AuthService, private http: HttpClient) { }
  // baseUrl = 'http://localhost:8084/';
  baseUrl = environment.baseUrl;
  url = `${this.baseUrl}api/user`;

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

  count(){
    return this.http.get(`${this.baseUrl}users`).pipe(
       catchError((err:any) => {
         console.error(`user.count(): error getting users`)
         return throwError(err);
       })
    )
  }
}
