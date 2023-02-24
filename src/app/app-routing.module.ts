import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/dashboard/home-page/home-page.component';
import { LoginComponent } from './home/user-entry/login/login/login.component';
import { SignUpComponent } from './home/user-entry/sign-up/sign-up/sign-up.component';
import { AuthguardGuard } from './service/guard/authguard.guard';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"sign_up",
    component:SignUpComponent
  },
  {
    path:"dashboard",
    canActivate:[AuthguardGuard],
    component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
