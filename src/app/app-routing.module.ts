import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotEmailComponent } from './pages/forgot-email/forgot-email.component';
import { ForgotPasswardComponent } from './pages/forgot-passward/forgot-passward.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticationGuard } from './service/authguard/authentication.guard'
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';


const routes: Routes = [
  { path : 'registration', component : RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-passward', component: ForgotPasswardComponent },
  { path: 'resetpassword/:token', component: ForgotEmailComponent },
  { path: 'dashboard', component:DashboardComponent, canActivate:[ AuthenticationGuard ] },
  { path:  'trash', component:TrashComponent },
  { path:  'archieve', component:ArchiveComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }