import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ServicesComponent} from './services/services.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';



const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'aboutus',component: AboutUsComponent},
  {path: 'services',component: ServicesComponent},
  {path: 'contactus',component: ContactUsComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
