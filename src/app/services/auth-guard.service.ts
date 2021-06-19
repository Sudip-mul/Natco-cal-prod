import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private router: Router) {}

  canActivate(route, state: RouterStateSnapshot) {
    if (localStorage.getItem('loggedin')) return true;

    this.router.navigate(['/login']);
    return false;
  }
}
