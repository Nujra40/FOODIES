import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {}

  makeOrder(data: any): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/API/orders/`, data);
  }
}
