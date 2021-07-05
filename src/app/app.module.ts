import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login/login.component';
import { ForgotPasswardComponent } from './pages/forgot-passward/forgot-passward.component';
import { ForgotEmailComponent } from './pages/forgot-email/forgot-email.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';


import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HeaderComponent } from './pages/header/header.component';



// import { MatSnackBarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswardComponent,
    ForgotEmailComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [],
  
  bootstrap: [AppComponent],

  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }