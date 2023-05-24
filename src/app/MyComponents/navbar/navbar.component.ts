import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
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
              ]
          },
          {
              label: 'Login',
              icon: 'pi pi-fw pi-lock',
              routerLink: "/login"
          }
      ];
  }
}

