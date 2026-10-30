import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Simulating login check from localStorage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (isLoggedIn) {
    return true; // Cho phép vào trang
  } else {
    alert('You are not logged in! I cannot let you access this page.');
    // Chuyển về '/contact' (bỏ chữ 's' để khớp với path 'contact' bên routing)
    return router.parseUrl('/contact'); 
  }
};