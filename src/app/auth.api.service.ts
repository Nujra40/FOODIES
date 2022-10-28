import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService {

  loginStatus: any = '';
  email: string = '';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    this.email = email;
    return this.http.post(`http://127.0.0.1:8000/API/authLogin/`, {
      'email': email,
      'password': password
    });
  }

  signUp(name: string, email: string, phno: string, password: string): Observable<any> {
    this.email = email;
    return this.http.post('http://127.0.0.1:8000/API/signUp/', {
      'name': name,
      'email': email,
      'phno': phno,
      'password': password
    })
  }
}