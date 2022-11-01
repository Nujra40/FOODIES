import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthAPIService } from './auth.api.service';
import { AuthComponent } from './auth/auth.component';

import { CartDataService } from './cart-data.service';

describe('CartDataService', () => {
  let service: CartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'auth', component: AuthComponent }
        ])
      ],
      providers: [ CartDataService, AuthAPIService ]
    });
    service = TestBed.inject(CartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
