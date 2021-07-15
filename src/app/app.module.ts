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
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { MatExpansionModule } from '@angular/material/expansion';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { IconComponent } from './component/icon/icon.component';
import { DisplaynodeComponent } from './component/displaynode/displaynode.component';
import { NoteComponent } from './component/note/note.component';
import { UpdateComponent } from './component/update/update.component';
import { ColorComponent } from './component/color/color.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswardComponent,
    ForgotEmailComponent,
    DashboardComponent,
    
    CreatenoteComponent,
    IconComponent,
    DisplaynodeComponent,
    NoteComponent,
    UpdateComponent,
    ColorComponent,
    TrashComponent,
    ArchiveComponent,
    
    
  
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
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule
    
  ],
  providers: [],
  
  bootstrap: [AppComponent],

  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }