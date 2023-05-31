import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { HomepageComponent } from './MyComponents/homepage/homepage.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { authgGuard } from './Guards/authg.guard';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home', canActivate:[authgGuard], component: HomepageComponent},
  {path: 'contact-us', component: ContactComponent},
  {path: 'about-us', component: AboutComponent},
  {path:'user', loadChildren:()=>
    import('./auth/auth.module').then(module=>module.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
