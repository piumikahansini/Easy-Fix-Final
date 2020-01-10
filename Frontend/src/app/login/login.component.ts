import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { UsercookieService } from '../usercookie.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    // private db:AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public usercookie:UsercookieService,
    private router: Router,
    private http: HttpClient,
    public snackBar: MatSnackBar,
    public db:AngularFirestore,
    ) {
    
   }

  ngOnInit() {

  }
  Login(formData) {
    

    

    if(formData.username == ''){
      let config = new MatSnackBarConfig();
          config.duration = true ? 2000 : 0;
          this.snackBar.open("User ID is empty..! ", true ? "Retry" : undefined, config);
    }
    else if(formData.psw == ''){
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Password is Empty..! ", true ? "Retry" : undefined, config);
    }
    else{
      this.afAuth.auth.signInWithEmailAndPassword(formData.username,formData.psw).
      then(user=>{
        // console.log(user.user)
        console.log(user.user.uid);
        this.db.collection("users").doc(user.user.uid).get().subscribe(function(doc){
          if(doc.exists){
            console.log(JSON.stringify(doc.data()));

            this.usercookie.setCookie("userAuth", JSON.stringify(doc.data()),1,"");
            var myCookie = JSON.parse(this.usercookie.getCookie("userAuth"));
            console.log(myCookie.userid);   

          }else{
            console.log("errorr");
          }
        })
        // console.log(abc);

        // this.usercookie.setCookie("userAuth", JSON.stringify(user), 1);
        //   var myCookie = JSON.parse(this.usercookie.getCookie("userAuth"));
        //   console.log(myCookie.userid);
        //   var id = myCookie.userid;
          
        //   if(id){
        //     let config = new MatSnackBarConfig();
        //     config.duration = true ? 2000 : 0;
        //     this.snackBar.open("Successfully Logged In..! ", true ? "Done" : undefined, config);
        //   }
        //   else{
        
        //   }


      })
      .catch(error=>console.log(error));    
    }
  }
}

// me signout karana eka 
    // this.afAuth.auth.signOut()

    


    // import { Component, OnInit } from '@angular/core';
    // import { Router } from '@angular/router';
    // import { HttpClient } from '@angular/common/http';
    // import { MycookiesService } from '../../Admin/mycookies.service';
    // import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
    
    // @Component({
    //   selector: 'app-login',
    //   templateUrl: './login.component.html',
    //   styleUrls: ['./login.component.scss']
    // })
    // export class LoginComponent implements OnInit {
    
    //   userid: String;
    //   password: String;
    
    //   user_id: any;
    //   user: any;
    //   authtoken: any;
    
    //   mySubscription: any;
    
    //   constructor(
    //     private router: Router,
    //     private http: HttpClient,
    //     private cookies: MycookiesService,
    //     public snackBar: MatSnackBar,
    
    //   ) { }
    
    
    
    
    
    
    
    
    //   ngOnInit() { 
    //     if (!localStorage.getItem('foo')) { 
    //       localStorage.setItem('foo', 'no reload') 
    //       location.reload() 
    //     } else {
    //       localStorage.removeItem('foo') 
    //     }
    //   }
    
    //   userLogin() {
    //     const user = {
    //       userid: this.userid,
    //       password: this.password
    //     };
    
    //     var url = "http://localhost:3000/users/login";
    
    //     if(user.userid == ''){
    //       let config = new MatSnackBarConfig();
    //           config.duration = true ? 2000 : 0;
    //           this.snackBar.open("User ID is empty..! ", true ? "Retry" : undefined, config);
    //     }
    //     else if(user.password == ''){
    //       let config = new MatSnackBarConfig();
    //       config.duration = true ? 2000 : 0;
    //       this.snackBar.open("Password is Empty..! ", true ? "Retry" : undefined, config);
    //     }
    //     else{
    //       this.http.post<any>(url, user).subscribe(res => {
    //         console.log(res.user);
            
    //         if (res.state == true) {
    //           this.cookies.setCookie("userAuth", JSON.stringify(res.user), 1);
    //           var myCookie = JSON.parse(this.cookies.getCookie("userAuth"));
    //           console.log(myCookie.userid);
    //           var id = myCookie.userid;
              
    //           if(id){
    //             this.router.navigate([myCookie.userid,'menu']);
    //             let config = new MatSnackBarConfig();
    //             config.duration = true ? 2000 : 0;
    //             this.snackBar.open("Successfully Logged In..! ", true ? "Done" : undefined, config);
    //           }
    //           else{
    //             this.router.navigate(['/login']);
    //           }
    
              
              
    //         }
    //         else {
    //           console.log(res.msg);
    //           let config = new MatSnackBarConfig();
    //           config.duration = true ? 2000 : 0;
    //           this.snackBar.open("Username or Password Incorrect..! ", true ? "Retry" : undefined, config);
    //           this.router.navigate(['/login']);
    //         }
    //       });
    //     }
    //   }
    // }
    // import { Injectable } from '@angular/core';

    // @Injectable({
    //   providedIn: 'root'
    // })
    // export class MycookiesService {
    
    //   constructor() { }
    
    //   setCookie(name: string, value: string, expireDays: number, path: string = '') {
    //     let d: Date = new Date();
    //     d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    //     let expires: string = expires=${d.toUTCString()};
    //     let cpath: string = path ? ; path=${path} : '';
    //     document.cookie = ${name}=${value}; ${expires}${cpath};
    //   }
    
    //   getCookie(name: string) {
    //     let ca: Array<string> = document.cookie.split(';');
    //     let caLen: number = ca.length;
    //     let cookieName = ${name}=;
    //     let c: string;
    
    //     for (let i: number = 0; i < caLen; i += 1) {
    //       c = ca[i].replace(/^\s+/g, '');
    //       if (c.indexOf(cookieName) == 0) {
    //         return c.substring(cookieName.length, c.length);
    //       }
    //     }
    //     return '';
    //   }
    // }









    





 

 