import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private userService: UserService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userService.register({ username: "admin", password: "admin123"});
    this.authService.init();
  }
}
