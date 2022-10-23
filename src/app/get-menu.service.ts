import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMenuService {

  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get('https://raw.githubusercontent.com/Nujra40/assets.FOODIES/main/menu.json');
  }
}
