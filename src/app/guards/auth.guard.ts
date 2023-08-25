import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  const authService = inject(AuthService);
  if (authService.isLoggedIn) {
    console.log('authGuard true');
    return true;
  }

  console.log('authGuard false');
  router.navigateByUrl('auth');
  return false;
};
