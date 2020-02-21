import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  token;
  logingStatus=false;
  username;
  constructor(
    public snackBar: MatSnackBar,
    private auth:AngularFireAuth
    ) { 
      if(this.getCookie("Auth")==''){
        this.logingStatus=false;
        
      }else{
        this.logingStatus=true;

        var mycookie=JSON.parse(this.getCookie("Auth"));
        this.username=mycookie.Name;
        console.log(mycookie)
      }
  }
  
  
  setCookie(name:string,value:string,expireDate:number,path='/'){
    this.logingStatus=true;
    let nowdate:Date=new Date();
    nowdate.setDate(nowdate.getDate()+expireDate);
    let expire:string=`[expire]=${nowdate.toUTCString()}`;
    // console.log(nowdate.toUTCString());
    let  cpath:string=path ? `;path=${path}`:'';
    document.cookie=`${name}=${value};${expire}${cpath}`;
    
  }
  getCookie(cname:string){
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
  return "";

    
  }
  Singout(){
    this.logingStatus=false;
    this.setCookie("Auth","",-1);
    this.auth.auth.signOut();
  }
}