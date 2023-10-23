import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthAPIService } from './auth.api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  cartData: any[] = [];
  totItems: number = 0;
  totAmount: number = 0;
  constructor(private http: HttpClient, private _auth: AuthAPIService, private _Router: Router) {
    if (!this._auth.email) {
      this._Router.navigate(['auth']);
      return;
    }
    const obs: Observable<any> =  this.http.get(`http://127.0.0.1:8000/API/getCart/${this._auth.email}/`);
    obs.subscribe(data => {
      this.cartData = data['cartData'];
      console.log('hehe');
    });
  }

  pushInvoice(totItems: number, totAmount: number) {
    const obs: Observable<any> = this.http.post('http://127.0.0.1:8000/API/pushInvoice/', {
      'email': this._auth.email,
      'totItems': totItems,
      'totAmount': totAmount
    });
    obs.subscribe(data => {
      console.log(data);
    })
  }

  pushCart() {
    const obs: Observable<any> =  this.http.post('http://127.0.0.1:8000/API/pushCart/', {
      'email': this._auth.email,
      'cartData': this.cartData
    });
    obs.subscribe(data => {
      console.log(data);
    });
  }

  getInvoice() {
    const obs2: Observable<any> = this.http.get(`http://127.0.0.1:8000/API/getInvoice/${this._auth.email}/`);
    console.log(this._auth.email);
    obs2.subscribe(async data => {
      console.log(data);
      this.totAmount = data['totAmount'];
      this.totItems = data['totItems'];
    });
    console.log(this.totAmount, this.totItems);
  }

}