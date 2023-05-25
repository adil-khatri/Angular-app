import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { ContactComponent } from './MyComponents/contact/contact.component';

const routes: Routes = [
  {path: 'contact-us', component: ContactComponent},
  {path: '', component: HomepageComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
