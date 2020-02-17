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
        this.username=mycookie.name;
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
  // createaaaa(){
    
  //   return cookiedate;
  // }
  

  // SignIn(email,password){
  //   this.afAuth.auth.signInWithEmailAndPassword(email,password).
  //     then(user=>{
  //       // console.log(user.user)
  //       console.log(user.user.uid);
  //       this.token=user.user.uid;
  //       this.db.collection("users").doc(this.token).get().subscribe(function(doc){
  //         if(doc.exists){
           
            
  //           // this.router.navigate(['../'])
  //           this.logingStatus=true;
  //           window.location.reload();
             
  //           return 1;
  //         }else{
  //           let config = new MatSnackBarConfig();
  //           config.duration = true ? 2000 : 0;
  //           this.snackBar.open("Password or email is incorrect ..! ", true ? "Retry" : undefined, config);
  //           console.log("errorr");
  //           return 0;
  //         }  
  //       })
  //     })
  //     .catch(error=>{
  //       let config = new MatSnackBarConfig();
  //       config.duration = true ? 2000 : 0;
  //       this.snackBar.open("Password or email is incorrect ..! ", true ? "Retry" : undefined, config);
  //     });
  //     return 0;
    
  // }
  
  
}
 // (YYYY, MM, DD, Hr, Min, Sec) 

 