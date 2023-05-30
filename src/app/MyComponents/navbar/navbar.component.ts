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
  userName:any;

  constructor(private userdata: UserdataService,private router:Router,private stateSrv: StateService){

  }
  ngOnInit() {  

    this.stateSrv.isLoggedInUserObs.subscribe(isLoggedIn => {
        this.loggedInUser = localStorage.getItem("user");
        this.userName = JSON.parse(this.loggedInUser);
        console.warn(this.userName);

        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-fw pi-home',
                routerLink: "/"
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
                  label: 'Our Services',
                  icon: 'pi pi-fw pi-calendar',
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
                  label: 'Login',
                  icon: 'pi pi-fw pi-lock',
                  routerLink: "/login",
                  visible: !isLoggedIn

              },
              {
                label: "Signup",
                icon: 'pi pi-fw pi-sign-in',
                routerLink: "/signup",
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
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

