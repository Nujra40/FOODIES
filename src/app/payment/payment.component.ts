import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartDataService } from '../cart-data.service';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  err = false;
  payLoading = false;
  txtColor = 'black';
  loadTxt = '';
  cardInvalid = false;
  constructor(private _ActivatedRoute: ActivatedRoute,
    private cartService: CartDataService, private orderService: OrdersService) { }

  qty: number = 0;
  tot: number = 0;
  ngOnInit(): void {
    this.qty = Number(this._ActivatedRoute.snapshot.paramMap.get('qty'));
    this.tot = Number(this._ActivatedRoute.snapshot.paramMap.get('tot'));
  }

  isLuhn(n: string) {
    let s: number = 0;
    let x: number = 1;
    let t: number = 0;
    for (let i = n.length-1; i >= 0; i--) {
      if (x == 1) s += Number(n[i]);
      else {
        t = Number(n[i]) * 2;
        while (t > 0) {
          s += (t % 10);
          t = Math.floor(t/10);
        }
      }
      x *= -1;
    }
    if (s % 10 == 0) return true;
    return false;
  }

  processPayment(data: any, delAddr: any) {
    this.err = false;
    this.cardInvalid = false;
    const name = data['name'];
    const cvv = data['cvv'];
    const exp = data['exp'];
    var num = data['num'];

    if (!(/[A-Za-z]{3,}/.test(name) && /[0-9]{3}/.test(cvv) && /[0-9\W]{16,}/.test(num) && /[0-9]{2}\/[0-9]{4}/.test(exp) && delAddr)) {
      this.err = true;
      return;
    }

    num = num.replace(' ', '');
    if (!this.isLuhn(num)) {
      this.cardInvalid = true;
      this.err = true;
      return;
    }
    this.loadTxt = 'Processing... Please Wait';
    this.payLoading = true;
    
    const time = new Date().getTime();
    this.orderService.makeOrder({[time]: this.cartService.cartData}).subscribe(data => {
      if (data['orderPlaced']) {
        this.cartService.cartData = [];
        this.cartService.pushCart();
        this.loadTxt = 'Payment Success... Order Placed!';
        this.txtColor = 'green';
      }
    })
  }
}
