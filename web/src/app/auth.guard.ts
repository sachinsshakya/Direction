import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _userService: UserService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._userService.loggedIn()) {
      return true
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }

}
