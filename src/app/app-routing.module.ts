import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { ForumComponent } from './components/forum/forum/forum.component';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
   {path: 'login', component: LoginComponent},
   {path: 'verify-email', component: VerifyEmailComponent},
   {path: 'forgot-password', component: ForgotPasswordComponent},
   {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
   {path: 'forum', component: ForumComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
