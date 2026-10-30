import { Component } from '@angular/core';
import { UserLogin } from '../classes/UserLogin';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  // Initialize the model for binding
  user = new UserLogin();

  onLogin() {
    console.log('Login information:', this.user);
    let infor = JSON.stringify(this.user);
    alert("Login Processing:\n" + infor);
  }
}