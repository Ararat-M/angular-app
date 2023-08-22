import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) { }

  auth = false

  ngOnInit(): void {
    this.auth = this.authService.init()
  }

  changeAuthState(authState: boolean) {
    this.auth = authState;
  }
}
