import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  disableSignIn: boolean = false;

  showSignIn() {
    this.disableSignIn = false;
    console.log('Sign In');
  }

  showSignUp() {
    this.disableSignIn = true;
    console.log('Sign Up');
  }

  signIn() {
    console.log('sign In');
  }

  signUp() {
    console.log('Sign Up');
  }

}
