import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  constructor() {}
  cartData: any[] = [];
}
