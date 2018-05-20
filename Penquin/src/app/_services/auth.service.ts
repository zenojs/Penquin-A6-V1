import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return this.loggedIn() ? localStorage.getItem('token') : '';
  }
}
