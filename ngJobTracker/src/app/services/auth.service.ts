import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:8084/';
  url = `${this.baseUrl}/api/applications`;
  constructor() { }
}
