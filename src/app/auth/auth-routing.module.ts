import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { authgGuard } from "../Guards/authg.guard";
import { preventBackGuard } from "../Guards/prevent-back.guard";


const routes: Routes = [
    {path: 'login', canActivate:[preventBackGuard] ,component: LoginComponent},
    {path: 'signup',canActivate:[preventBackGuard], component: SignupComponent},
    {path: 'dashboard', canActivate:[authgGuard], component: DashboardComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }