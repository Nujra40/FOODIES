import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAPIService } from '../auth.api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  constructor (private router: Router, private authService: AuthAPIService) {}

  loginFailed = false;
  signUpFailed = false;
  disableSignIn: boolean = false;
  e_si: string = 'gray';
  pa_si: string = 'gray';

  n_su: string = 'gray';
  e_su: string = 'gray';
  ph_su: string = 'gray';
  pa_su: string = 'gray';
  cp_su: string = 'gray';


  showSignIn() {
    this.disableSignIn = false;
  }

  showSignUp() {
    this.disableSignIn = true;
  }

  signIn(data: any) {
    const email = data['email-signin'];
    const password = data['password-signin'];

    if (email == 'admin' && password == '5TimesDollar$$$$$') {
      this.authService.email = 'email';
      this.router.navigate(['admin']);
    }

    var valid: boolean = true;

    if (!/^[0-9A-Za-z._]{1,}@[0-9A-Za-z.]{1,}$/.test(email)) {
      this.e_si = 'red';
      valid = false; 
    } else {
      this.e_si = 'gray';
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
      this.pa_si = 'red';
      valid = false;
    } else {
      this.pa_si = 'gray';
    }

    if (!valid) return;
    this.authService.login(email, password).subscribe(data => {
      if (data['loginStatus']) {
        console.log("asdasd" + email);
        this.authService.email = email;
        this.router.navigate(['home']);
      }
      else this.loginFailed = true;
    });
  }

  signUp(data: any) {
    const name = data['name-signup'];
    const email = data['email-signup'];
    const phno = data['phone-signup'];
    const password = data['password-signup'];
    const cpassword = data['c-password-signup'];

    var valid: boolean = true;

    if (!name) {
      this.n_su = 'red';
      valid = false;
    } else {
      this.n_su = 'gray';
    } 

    if (!/^[0-9A-Za-z._]{1,}@[0-9A-Za-z.]{1,}$/.test(email)) {
     this.e_su = 'red';
     valid = false; 
    } else {
      this.e_su = 'gray';
    }

    if (!/^[+]91(-|\s|)[0-9]{10}$/.test(phno)) {
      this.ph_su = 'red';
      valid = false;
    } else {
      this.ph_su = 'gray';
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) || !(cpassword == password)) {
      this.cp_su = this.pa_su = 'red';
      valid = false;
    } else {
      this.cp_su = this.pa_su = 'gray';
    }

    if (!valid) return;
    this.authService.signUp(name, email, phno, password).subscribe(data => {
      if (data['signUpStatus']) {
        this.authService.email = email;
        this.router.navigate(['home']);
      }
      else this.signUpFailed = true;
    });
  }
}
