import { Component, OnInit } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { GetMenuService } from '../get-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu: any = false;
  constructor(private menuService: GetMenuService, public cartService: CartDataService) {
    this.menuService.fetch()
    .subscribe(data => this.menu = data);
  }

  ngOnInit(): void {}

  addToCart(item: any) {
    this.cartService.cartData.push(item);
    this.cartService.pushCart();
  }

  get cartDataID() {
    let x: number[] = [];
    for (let item of this.cartService.cartData) {
      x.push(item.itemID)
    }
    return x;
  }
}
