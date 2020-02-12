import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {  AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import {AuthService} from '../auth.service';

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
  Log="Loging";
  flag=true;
  constructor(
    private auth:AuthService
    ) { }


  ngOnInit() {
    if(this.auth.getCookie("Auth")==''){
      this.Log="Loging"  

    }else{

      var data=JSON.parse(this.auth.getCookie("Auth"));
      console.log(data)
      this.Log=data.Firstname;
    }
  }
  signout(){
    this.auth.Singout();
    this.Log="Loging";
    window.location.reload();
  }
}
