import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  err = false;
  payLoading = false;
  txtColor = 'black';
  loadTxt = 'Processing Payment.';
  constructor(private _ActivatedRoute: ActivatedRoute, private _Router: Router) { }

  qty: number = 0;
  tot: number = 0;
  ngOnInit(): void {
    this.qty = Number(this._ActivatedRoute.snapshot.paramMap.get('qty'));
    this.tot = Number(this._ActivatedRoute.snapshot.paramMap.get('tot'));
  }

  processPayment(data: any) {
    const name = data['name'];
    const cvv = data['cvv'];
    const num = data['num'];
    const exp = data['exp'];

    if (name && cvv && num && exp) {
      this.err = false;
      this.payLoading = true;
      setTimeout(() => {
        this.loadTxt = 'Processing Payment..';
      }, 500);
      setTimeout(() => {
        this.loadTxt = 'Processing Payment...';
      }, 1000);
      setTimeout(() => {
        this.loadTxt = 'Processing Payment';
      }, 1500);
      setTimeout(() => {
        this.loadTxt = 'Processing Payment.';
      }, 2000);
      setTimeout(() => {
        this.loadTxt = 'Processing Payment..';
      }, 2500);
      setTimeout(() => {
        this.loadTxt = 'Processing Payment...';
      }, 3000);
      setTimeout(() => {
        this.loadTxt = 'Processing Payment';
      }, 3500);
      setTimeout(() => {
        this.loadTxt = 'Processing Payment.';
      }, 4000);
      setTimeout(() => {
        this.loadTxt = 'Processing Payment..';
      }, 4500);
      setTimeout(() => {
        this.loadTxt = 'Processing Payment...';
      }, 5000);
      setTimeout(() => {
        this.loadTxt = 'Payment Success... Order Placed!';
        this.txtColor = 'green';
      }, 5500);
    }
    else this.err = true;
  }
}
