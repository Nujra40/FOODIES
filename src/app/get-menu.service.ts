import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMenuService {

  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get('http://127.0.0.1:8000/API/getMenu/');
  }

  pushMenu(data: any) {
    const obs: Observable<any> =  this.http.post('http://127.0.0.1:8000/API/getMenu/', {
      'menu': data
    });
    obs.subscribe(data => {
      console.log(data);
    });
  }

}
