import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() {
    this.isLoggedIn = !!this.getAuthToken()
  }

  getAuthToken() {
    return localStorage.getItem('token')
  }

  setAuthToken(token: string) {
    this.isLoggedIn = true
    localStorage.setItem('token', token)
  }

  login(email: string, password: string) {
    // const user = localStorage.getItem('users')
    // Проверяем данные без сервера
    if (email === 'test@gmail.com' && password === 'test123') {
      this.setAuthToken('asdasdwercwecfwdfv')
      return true
    }
    return false
  }

  logout() {
    this.isLoggedIn = false
    localStorage.removeItem("token")
  }
}
