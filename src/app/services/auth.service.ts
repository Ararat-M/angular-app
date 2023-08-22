import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  init() {
    const data = localStorage.getItem("currentUser");

    if (!data) return false;

    return true
  }

  login(user: IUser) {
    const data = localStorage.getItem("users");

    if (!data) return false;

    const users: IUser[] = [JSON.parse(data)];

    for (let item of users) {
      if (item.username == user.username && item.password == user.password) {
        localStorage.setItem("currentUser", JSON.stringify(user))
        return true
      }
    }

    return false
  }

  logout() {
    localStorage.removeItem("currentUser")
  }
}
