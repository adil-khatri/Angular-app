import { Component, OnInit } from '@angular/core';
import { StateService } from './Services/state.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myfirst-angular';
  loggedInUser: any;
  userName:any;
  constructor(private stateSrv:StateService,private router:Router){}

  ngOnInit(): void {
    console.log("gjhgjgjgj");
    this.loggedInUser = localStorage.getItem("user");
    this.userName = JSON.parse(this.loggedInUser);
    console.log(this.userName);
    if(this.loggedInUser){
      this.stateSrv.isLoggedInUserObs.next(true)  
    }else{
      this.stateSrv.isLoggedInUserObs.next(false)
    } 
  }
}
