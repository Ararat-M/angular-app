import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  static login(user: IUser) {
    const data = localStorage.getItem("users");

    if (!data) return;

    const users: IUser[] = [JSON.parse(data)];

    for (let item of users) {
      if (item.username == user.username && item.password == user.password) {
        localStorage.setItem("currentUser", JSON.stringify(user))
      }
    }
  }

  logout() {
    localStorage.removeItem("currentUser")
  }
}
