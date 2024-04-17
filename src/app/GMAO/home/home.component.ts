import { Component } from '@angular/core';

interface User {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  authenticated: boolean = false;
  user: User | undefined;
  userCredentials: User[] = [];
  signUpSuccess: boolean = false;
  loginError: boolean = false;
  defaultTab: number = 0; // 0 for the first tab, 1 for the second tab, etc.

  constructor() {
    // Initialize userCredentials with the provided email, password, and name
    this.userCredentials.push({ name: 'dhia', email: 'dhia@gmail.com', password: '123456789' });
    
    
  }

  login(email: string, password: string) {
    // Here you would typically authenticate against a backend service.
    // For the sake of simplicity, let's assume the credentials are valid if they match any stored userCredentials.
    const user = this.userCredentials.find(user => user.email === email && user.password === password);
    if (user) {
      this.authenticated = true;
      this.loginError = false;
      this.user = user;
      this.defaultTab = 1; // Set default tab to the second tab after successful login
    } else {
      this.authenticated = false;
      this.loginError = true;
      this.user = undefined;
    }
  }

  logout() {
    this.authenticated = false;
    this.user = undefined;
    this.defaultTab = 0; // Set default tab back to the first tab after logout
  }

  saveUser(name: string, email: string, password: string) {
    // Here you would typically send the user credentials to a backend service to save them securely.
    this.userCredentials.push({ name, email, password });
    this.signUpSuccess = true;
  }
  
}
