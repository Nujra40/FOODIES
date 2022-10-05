import { Component, OnInit } from '@angular/core';

interface User {
  email: string;
  phno: string;
  password: string;
}


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  disableSignIn: boolean = false;
  e_si: string = 'gray';
  pa_si: string = 'gray';

  e_su: string = 'gray';
  ph_su: string = 'gray';
  pa_su: string = 'gray';
  cp_su: string = 'gray';


  showSignIn() {
    this.disableSignIn = false;
    console.log('Sign In');
  }

  showSignUp() {
    this.disableSignIn = true;
    console.log('Sign Up');
  }

  signIn(data: any) {
    const email = data['email-signin'].value;
    const password = data['password-signin'].value;

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

    if (valid) {
      alert("Sign In Success");
    }

    console.log(email, password);
    
  }

  signUp(data: any) {
    const email = data['email-signup'].value;
    const phno = data['phone-signup'].value;
    const password = data['password-signup'].value;
    const cpassword = data['c-password-signup'].value;

    var valid: boolean = true;

    if (!/^[0-9A-Za-z._]{1,}@[0-9A-Za-z.]{1,}$/.test(email)) {
     this.e_su = 'red';
     valid = false; 
    } else {
      this.e_su = 'gray';
    }

    if (!/^[+]91(-|\s)[0-9]{10}$/.test(phno)) {
      this.ph_su = 'red';
      valid = false;
    } else {
      this.ph_su = 'gray';
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
      this.pa_su = 'red';
      valid = false;
    } else {
      this.pa_su = 'gray';
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      this.cp_su = 'red';
      valid = false;
    } else {
      this.cp_su = 'gray';
    }

    if (!(cpassword == password)) {
      this.cp_su = this.pa_su = 'red';
      valid = false;
    } else {
      this.cp_su = this.pa_su = 'gray';
    }

    if (valid) {
      alert("Sign Up Success");
    }

    console.log(email, password, cpassword, phno);
  }
}
