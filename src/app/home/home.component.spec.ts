import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { AdminComponent } from '../admin/admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { GetMenuService } from '../get-menu.service';
import { CartDataService } from '../cart-data.service';
import { OrdersService } from '../orders.service';
import { AuthComponent } from '../auth/auth.component';
import { CartComponent } from '../cart/cart.component';
import { PaymentComponent } from '../payment/payment.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
          { path: 'auth', component: AuthComponent },
          { path: 'home', component: HomeComponent },
          { path: 'cart', component: CartComponent },
          { path: 'admin', component: AdminComponent }, 
          { path: 'pay/:qty/:tot', component: PaymentComponent },
          { path: '**', redirectTo: '/auth', pathMatch: 'full'}
        ]),
        HttpClientModule,
        NgChartsModule,
      ],
      providers: [GetMenuService, CartDataService, OrdersService]

    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
