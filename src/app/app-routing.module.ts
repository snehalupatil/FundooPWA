import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotEmailComponent } from './pages/forgot-email/forgot-email.component';
import { ForgotPasswardComponent } from './pages/forgot-passward/forgot-passward.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidenavComponent } from './pages/dashboard/component/sidenav/sidenav.component';
import { HeaderComponent } from './pages/dashboard/component/header/header.component';
import { AddnotesComponent } from './pages/dashboard/component/addnotes/addnotes.component';




const routes: Routes = [
  { path : 'registration', component : RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-passward', component: ForgotPasswardComponent },
  { path: 'resetpassword/:token', component: ForgotEmailComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'sidenav', component:SidenavComponent },
  { path: 'header', component:HeaderComponent },
  { path: 'addnotes', component:AddnotesComponent }

  
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }