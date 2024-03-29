import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { GetMenuService } from './get-menu.service';
import { CartDataService } from './cart-data.service';
import { OrdersService } from './orders.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    CartComponent,
    PaymentComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'auth', component: AuthComponent },
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'admin', component: AdminComponent }, 
      { path: 'pay', component: PaymentComponent },
      { path: '**', redirectTo: '/auth', pathMatch: 'full'}
    ]),
    HttpClientModule,
    NgChartsModule
  ],
  providers: [GetMenuService, CartDataService, OrdersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
