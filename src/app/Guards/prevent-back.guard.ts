import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StateService } from '../Services/state.service';

@Injectable({
 providedIn: 'root'
})
export class preventBackGuard implements CanActivate {

  constructor(private stateSrv: StateService, private router: Router){};
  loggedInUser: any;
  userName:any;

  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.loggedInUser = localStorage.getItem("user");
    this.userName = JSON.parse(this.loggedInUser);
    if(this.loggedInUser){
      this.router.navigate(['/user/dashboard']);
      return false;
    }else{
      // this.stateSrv.isLoggedInUserObs.next(false)
      // this.router.navigate(['/user/login']);
      return true;
    }
  }
}
