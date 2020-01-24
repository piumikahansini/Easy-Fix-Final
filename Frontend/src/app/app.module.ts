import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSelectModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {MatTableModule} from '@angular/material/table';
//import {CookieService} from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { ServicesComponent } from './login/services/services.component';
import { HomeNotFoundComponent } from './home-not-found/home-not-found.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegistrationComponent } from './registration/registration.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {UserSignupComponent } from'./register/user-signup/user-signup.component';
import { RegisterRequestsComponent } from './register-requests/register-requests.component';

// firebase modules
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { ServiceRequestComponent } from './service-request/service-request.component';

import { AuthService} from './auth.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    // ServicesComponent,
    HomeNotFoundComponent,
    CustomerServiceComponent,
    ServiceRequestComponent,
    RegistrationComponent,
    AppointmentsComponent,
    DashboardComponent,


    UserSignupComponent,
    RegisterRequestsComponent,
    UserProfileComponent,
    SidebarComponent,
    TopbarComponent
    

   
  ],
  imports: [
    MatSnackBarModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MDBBootstrapModule.forRoot(),
    MatCardModule,
    MatGridListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2PageScrollModule,


    MatTableModule,
    //CookieService 

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
