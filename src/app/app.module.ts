import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GetMenuService } from './get-menu.service';
import { CartDataService } from './cart-data.service';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    CartComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'auth', component: AuthComponent },
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'pay/:qty/:tot/:paymethod', component: PaymentComponent },
      { path: '**', redirectTo: '/auth', pathMatch: 'full'}
    ]),
    HttpClientModule
  ],
  providers: [GetMenuService, CartDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
