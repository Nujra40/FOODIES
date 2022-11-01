import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentComponent } from './payment.component';
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
import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';


describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentComponent ],
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

    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true for `n = 6522_9403_3935_1473` on isLuhn function', () => {
    expect(component.isLuhn('6522940339351473')).toBeTrue();
  });

  it('should return false for `n = 6522_9403_3935_1472` on isLuhn function', () => {
    expect(component.isLuhn('6522940339351472')).toBeFalse();
  });
});
