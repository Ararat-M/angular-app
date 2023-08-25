import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(
    private router: Router
  ) {
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
    const data = localStorage.getItem("users");
    if (!data) return
    
    const users: IUser[] = [JSON.parse(data)];
    
    for (const user of users) {
      if (user.email == email && user.password == password) {
        this.setAuthToken('asdasdwercwecfwd3fv')
        return true
      }
    }

    return false
  }

  logout() {
    this.isLoggedIn = false
    localStorage.removeItem("token")
    this.router.navigateByUrl("auth")
  }
}
