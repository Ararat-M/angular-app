import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  register(user: IUser) {
    console.log('register user');
    const data = localStorage.getItem('users');

    if (!data) {
      localStorage.setItem('users', JSON.stringify(user));
      return;
    }

    const users: IUser[] = [JSON.parse(data)];

    for (const item of users) {
      if (item.email == user.email) {
        return;
      }
    }

    localStorage.setItem('users', JSON.stringify(user));
  }
}
