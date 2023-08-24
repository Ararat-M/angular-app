import { Injectable } from '@angular/core';
import { IUser } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isAuth$ = new BehaviorSubject<boolean>(false);

  init() {
    const data = localStorage.getItem("currentUser");

    if (!data) return this.isAuth$.next(false);

    this.isAuth$.next(true)
  }

  login(user: IUser) {
    const data = localStorage.getItem("users");

    if (!data) return;

    const users: IUser[] = [JSON.parse(data)];

    for (let item of users) {
      if (item.username == user.username && item.password == user.password) {
        localStorage.setItem("currentUser", JSON.stringify(user))
        
        return this.isAuth$.next(true)
      }
    }
  }

  logout() {
    this.isAuth$.next(false)
    localStorage.removeItem("currentUser")
  }
}
