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
  cartData: number[] = [];
  constructor(private menuService: GetMenuService, public cartService: CartDataService) {
    this.menuService.fetch()
    .subscribe(data => {
      this.menu = data;
      console.log(this.menu);
    });
  }

  ngOnInit(): void {
    for (let item of this.cartService.cartData) {
      this.cartData.push(item.itemID);
    }
  }

  addToCart(item: any, itemID: number) {
    this.cartService.cartData.push(item);
    this.cartData.push(itemID);
  }

}
