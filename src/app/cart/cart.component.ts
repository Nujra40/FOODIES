import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  
  constructor () {}

  orders: any = [
    {
      "itemID": 175,
      "filePath": "assets/images/chicken65.jpg",
      "item": "Chicken 65",
      "unit": 124,
      "qty": 3
    },
    {
      "itemID": 123,
      "filePath": "assets/images/chicken65.jpg",
      "item": "Dosa",
      "unit": 100,
      "qty": 2
    }
  ];

  decQty(id: number) {
    for (let order of this.orders) {
      if (order.itemID == id) {
        order.qty -= 1;
        break;
      }
    }
  }

  incQty(id: number) {
    for (let order of this.orders) {
      if (order.itemID == id) {
        order.qty += 1;
        break;
      }
    }
  }

  deleteItem(id: number) {
    let c = 0;
    for (let order of this.orders) {
      if (order.itemID == id) {
        this.orders.splice(c, c+1);
        break;
      }
      c++;
    }
  }

  get totItems() {
    let x = 0;
    for (let order of this.orders)
      x += order.qty;
    
    return x;
  }

  get totAmount() {
    let x = 0;
    for (let order of this.orders)
      x += (order.qty * order.unit);
    return x;
  }


  ngOnInit() {}

}
