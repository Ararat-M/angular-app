import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  register(user: IUser) {
    const data = localStorage.getItem("users");

    if (!data) {
      localStorage.setItem("users", JSON.stringify(user))
      return
    };

    const users: IUser[] = [JSON.parse(data)];
    
    for (let item of users) {
      if (item.username == user.username) {
        return;
      }
    }

    localStorage.setItem("users", JSON.stringify(user))
  }
}
