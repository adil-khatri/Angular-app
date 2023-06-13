import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { StateService } from 'src/app/Services/state.service';
import { UserdataService } from 'src/app/Services/userdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  loggedInUser:any;
  loginUserData:any; 
  userName!:any;

  constructor(private userdata: UserdataService,private router:Router,private stateSrv: StateService){

  }
  ngOnInit() {  
        this.stateSrv.isLoggedInUserObs.subscribe(isLoggedIn => {
        this.loggedInUser = localStorage.getItem("user");
        this.loginUserData = JSON.parse(this.loggedInUser);
        if(this.loggedInUser !== null){
        this.userName = this.loginUserData[0].currectuser;
        }
        this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-calendar',
                routerLink:['user/dashboard'],
                items: [
                    {
                        label: 'Website',
                        icon: 'pi pi-fw pi-desktop',
                    },
                    {
                        label: 'Mobile App',
                        icon: 'pi pi-fw pi-calendar-times',
                    }
                ],
                visible: isLoggedIn
            },
            {
                label: 'Add Todos',
                icon: 'pi pi-fw pi-home',
                routerLink: "/home",
                visible: isLoggedIn
            },
            {
                  label: 'About',
                  icon: 'pi pi-fw pi-building',
                  routerLink: "about-us",
              },
              {
                  label: 'Contact',
                  icon: 'pi pi-fw pi-user',
                  routerLink: "/contact-us"
              },
              {
                label: 'calender',
                icon: 'pi pi-fw pi-user',
                routerLink: "/calender"
            },
              {
                  label: 'Login',
                  icon: 'pi pi-fw pi-lock',
                  routerLink: "/user/login",
                  visible: !isLoggedIn

              },
              {
                label: "Signup",
                icon: 'pi pi-fw pi-sign-in',
                routerLink: "/user/signup",
                visible: !isLoggedIn
            },
            {
                label: this.userName,
                icon: 'pi pi-fw pi-sign-in',
                items: [
                    {
                        label: 'Sign Out',
                        icon: 'pi pi-fw pi-sign-out',
                        command:()=>{
                            this.signOut()
                        }
                    }
                ],
             visible: isLoggedIn
            },
          ];
    })
  }
  
  signOut=()=>{
    localStorage.removeItem('user');
    this.router.navigate(['user/login']);
  }
}

