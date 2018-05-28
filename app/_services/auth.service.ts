import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

    loggedIn() {
    return !!localStorage.getItem('CurrentUser');
  }

  removeToken() {
    localStorage.removeItem('CurrentUser');
  }

  setToken(token: string)
  {
    localStorage.setItem('CurrentUser', token);
  }

  getToken() {
    return this.loggedIn() ? localStorage.getItem('CurrentUser') : '';
  }

  getUserToken() {
    return this.loggedIn() ? JSON.parse(localStorage.getItem('CurrentUser'))['token'] : '';
  }

  getUserEmail() {
    return this.loggedIn() ? JSON.parse(localStorage.getItem('CurrentUser'))['email'] : '';
  }
}
