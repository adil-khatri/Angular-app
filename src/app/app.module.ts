import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { LoginComponent } from './MyComponents/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    HomepageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'contact-us', component: ContactComponent},
      {path: '', component: HomepageComponent},
      {path: 'about-us', component: AboutComponent},
      {path: 'login', component: LoginComponent},
    ]),
    AppRoutingModule,
    ButtonModule,
    SliderModule,
    FormsModule,
    MenubarModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
