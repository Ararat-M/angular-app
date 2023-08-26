import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  loadingRouteConfig: boolean;

  ngOnInit(): void {
    this.userService.register({ email: 'admin@test.com', password: 'admin123' });

    this.router.events.subscribe(e => {
      if (e instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (e instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }
    });
  }
}
