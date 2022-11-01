import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { GetMenuService } from './get-menu.service';
import { CartDataService } from './cart-data.service';
import { OrdersService } from './orders.service';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AuthComponent,
        HomeComponent,
        CartComponent,
        PaymentComponent,
        AdminComponent
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FOODIES'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FOODIES');
  });

});
