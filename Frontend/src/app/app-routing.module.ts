import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ServicesComponent} from './services/services.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
// import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import{HomeNotFoundComponent} from './home-not-found/home-not-found.component'

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path: 'aboutus',component: AboutUsComponent},
  {path: 'services',component: ServicesComponent},
  {path: 'contactus',component: ContactUsComponent},
  {path: '**',component: HomeNotFoundComponent},
  // {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
