import { Component, OnInit } from '@angular/core';  
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

class User{
  name:string;
  NIC:string;
  Email:string;

}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  Log="Login";
  flag=true;
  constructor(
    private auth:AuthService,
    private route:Router
    ) { }


  ngOnInit() {
    
  }
 
  signout(){
    this.auth.Singout();
    this.auth.logingStatus=false;
   
    this.route.navigate(['/']);

  }
}
