import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
private isLoggedInUser: boolean = false;
public isLoggedInUserObs=new BehaviorSubject(false);
  constructor() { }

  get isLoggedIn(){
    return this.isLoggedInUser;
  }

  set isLoggedIn(loginStatus: boolean){
    this.isLoggedInUser = loginStatus;
  }


}
