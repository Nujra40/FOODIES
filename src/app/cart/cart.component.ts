import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  
  constructor (public cartService: CartDataService) {
    for (let item of cartService.cartData) {
      if (item['qty'] === undefined) item['qty'] = 1;
    }
  }

  decQty(id: number) {
    for (let order of this.cartService.cartData) {
      if (order.itemID == id) {
        order.qty -= 1;
        break;
      }
    }
  }

  incQty(id: number) {
    for (let order of this.cartService.cartData) {
      if (order.itemID == id) {
        order.qty += 1;
        break;
      }
    }
  }

  deleteItem(id: number) {
    let c = 0;
    for (let order of this.cartService.cartData) {
      if (order.itemID == id) {
        this.cartService.cartData.splice(c, 1);
        break;
      }
      c++;
    }
  }

  get totItems() {
    let x = 0;
    for (let order of this.cartService.cartData)
      x += order.qty;
    
    return x;
  }

  get totAmount() {
    let x = 0;
    for (let order of this.cartService.cartData)
      x += (order.qty * order.unit);
    return x;
  }


  ngOnInit() {}

}
