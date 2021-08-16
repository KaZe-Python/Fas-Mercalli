import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { ButtonComponent } from './components/UI/button/button.component';
import { InputComponent } from './components/UI/input/input.component';
import { NavbarComponent } from './components/UI/navbar/navbar.component';
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { PostBrevComponent } from './components/UI/forum/post-brev/post-brev.component';
import { PostLongComponent } from './components/UI/forum/post-long/post-long.component';
import { ForumComponent } from './components/forum/forum/forum.component';
import { ForumPostLongComponent } from './components/forum/forum-post-long/forum-post-long.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ButtonComponent,
    InputComponent,
    NavbarComponent,
    DashboardComponent,
    PostBrevComponent,
    PostLongComponent,
    ForumComponent,
    ForumPostLongComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
