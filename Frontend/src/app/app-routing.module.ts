import { ServiceRequestComponent } from './service-request/service-request.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import {ServicesComponent} from './services/services.component';
// import {LoginComponent} from './login/login.component';
import { HomeNotFoundComponent } from './home-not-found/home-not-found.component'
import { AppointmentsComponent } from './appointments/appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent} from './registration/registration.component';
import { RegisterRequestsComponent } from './register-requests/register-requests.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { ViewMechcnicsComponent} from './view-users/view-mechcnics/view-mechcnics.component';
import { ViewUsersComponent} from './view-users/view-users.component';
import { ViewCustomerComponent } from './view-users/view-customer/view-customer.component';
import { ViewServiceCentersComponent } from './view-users/view-service-centers/view-service-centers.component';
import { IssueReportingComponent} from './issue-reporting/issue-reporting.component';
import { BlockUserComponent } from './block-user/block-user.component';
import { IssueHandlingComponent } from './issue-handling/issue-handling.component';

import { from } from 'rxjs';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch:'full'},
  { path: 'home',component: HomeComponent},
  { path: 'customerservice', component: CustomerServiceComponent },
  { path: 'servicerequest/:serviceid', component : ServiceRequestComponent},
  // {path: 'mecha,nicSignup',component: MechanicSignupComponent},
  // {path: 'services',component: ServicesComponent},
  {path: 'dashboard', component: DashboardComponent,children:[
    { path: '', component: UserProfileComponent},
    { path: 'registerRequests',component: RegisterRequestsComponent},
    { path: 'profile',component: UserProfileComponent},
    { path: 'appointments',component: AppointmentsComponent},
    { path: 'issue_R', component: IssueReportingComponent},
    { path: 'black_list', component:BlockUserComponent},
    { path: 'issue_h', component:IssueHandlingComponent},
    { path: 'viewprofile/:id', component:ViewprofileComponent},

    
    { path: 'viewUsers', component:ViewUsersComponent,children:[
      { path: 'viewMechanics', component:ViewMechcnicsComponent},
      { path: 'viewCustomers', component:ViewCustomerComponent},
      { path: 'viewServiceCenters', component:ViewServiceCentersComponent},
     
    ]},
    
  ]},

  { path: 'registration',component: RegistrationComponent},
  { path: 'menu' ,component: MenuComponent},
  { path: '**',component: HomeNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



