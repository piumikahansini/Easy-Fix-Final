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
    if(localStorage.getItem("loc")){
      this.flag=false;
    }
    if(this.auth.getCookie("Auth")==''){
      this.Log="Login"  

    }else{

      var data=JSON.parse(this.auth.getCookie("Auth"));
      console.log(data)
      this.Log=data.name;
      console.log(this.Log);
    }
  }
  flagFalse(){
    window.localStorage.setItem("loc","false");
    this.flag=false;
  }
  flagTrue(){
    localStorage.removeItem("loc");
    this.flag=true;
  }
  signout(){
    this.auth.Singout();
    this.Log="Login";
    this.auth.logingStatus=false;
    localStorage.removeItem("loc");
    this.route.navigate(['/']);2

  }
}
