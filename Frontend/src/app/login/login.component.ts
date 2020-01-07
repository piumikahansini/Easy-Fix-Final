import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {  AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { UsercookieService } from '../usercookie.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

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
    private usercookie:UsercookieService,
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
        var abc=this.db.collection("users").doc(user.user.uid);
        console.log(abc);

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

    








 

 