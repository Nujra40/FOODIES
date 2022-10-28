import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GetMenuService } from '../get-menu.service';
import { OrdersService } from '../orders.service';

// interface order {
//   itemID: number,
//   filePath: string,
//   item: string,
//   unit: number,
//   isNonveg: boolean,
//   ratting: number[],
//   serves: number,
//   qty: number
// }

// interface orderJSON {
//   orderID: order[]
// }

interface purSpl {
  [_: number]: number,
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allOrders: any;
  menu: any;
  purchaseSplit = {} as purSpl;
  constructor(public menuService: GetMenuService, public ordersService: OrdersService) {
    forkJoin([
      this.menuService.fetch(),
      this.ordersService.getOrders()
    ]).subscribe(([menu, allOrders]) => {
      this.menu = menu;
      this.allOrders = allOrders;
      this.parsePurchaseSplit();
    });
  }

  ngOnInit(): void {}

  parsePurchaseSplit() {
    for (let item of this.menu) {
      this.purchaseSplit[item.itemID] = 0;
    }

    for (var orderID in this.allOrders) {
      for (let item of this.allOrders[orderID]) {
        this.purchaseSplit[item.itemID] += item.qty;
      }
    }

    console.log(this.purchaseSplit);
  }

}
