import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { LoginComponent } from './auth/login/login.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home', component: HomepageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'about-us', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
