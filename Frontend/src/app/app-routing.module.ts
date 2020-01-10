import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import {ServicesComponent} from './services/services.component';
// import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeNotFoundComponent } from './home-not-found/home-not-found.component'
import { AppointmentsComponent } from './appointments/appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  // {path: 'services',component: ServicesComponent},
  {path: 'register',component: RegisterComponent},   
  {path: 'appointments',component: AppointmentsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**',component: HomeNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



