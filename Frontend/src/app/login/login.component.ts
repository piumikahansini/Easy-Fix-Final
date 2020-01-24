import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router} from '@angular/router';
import { AuthService} from '../auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(
    private router: Router,
    private http: HttpClient,
    public snackBar: MatSnackBar,
    private fireauth:AngularFireAuth,
    private db:AngularFirestore,
    public authe:AuthService,
    ) { }

  ngOnInit() { }
  Login(formData){
    this.authe
    
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
      
      this.fireauth.auth.signInWithEmailAndPassword(formData.username,formData.psw).then(user=>{
        
        this.db.collection("users").doc(user.user.uid).get().subscribe(data=> {
          if(data.exists){
            var returnData=data.data();

            
            var temp={
              Fname:returnData.FirstName,
              Sname:returnData.LastName,
              usertype:returnData.usertype,
            }
            
            console.log(JSON.stringify(returnData));
            this.authe.setCookie("Auth",JSON.stringify(temp),1);
            // this.auth("Auth",JSON.stringify(returnData),1);
            console.log(this.authe.getCookie("Auth"));
            this.router.navigate(['../dashboard']);
          }else{
            let config = new MatSnackBarConfig();
            config.duration = true ? 2000 : 0;
            this.snackBar.open("Password or Email Incorect..!", true ? "Retry" : undefined, config);
          }
        })
      })
    }
  }
}

// me signout karana eka 
    // this.afAuth.auth.signOut()

    


    







    





 

 