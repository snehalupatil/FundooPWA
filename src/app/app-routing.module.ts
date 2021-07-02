import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotEmailComponent } from './pages/forgot-email/forgot-email.component';
import { ForgotPasswardComponent } from './pages/forgot-passward/forgot-passward.component';

const routes: Routes = [
  { path : 'registration', component : RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-passward', component: ForgotPasswardComponent },
  { path: 'resetpassword/:token', component: ForgotEmailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
