import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Router} from '@angular/router';
import { AuthService} from '../auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { style } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  mystyle = {
    'display':'block'
  }
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
        
        this.db.collection("users").doc(user.user.uid).get().subscribe(data=>{
          if(data.exists){
            var returnData=data.data();
            if(returnData.blockstatus){
              let config = new MatSnackBarConfig();
              config.duration = true ? 20000 : 0;
              this.snackBar.open("You Don't  Have Permision to logging Please contact admin ", true ? "OK" : undefined, config);
              return ;
            }
            if(returnData.usertype == "Service" || returnData.usertype == "Mechanic"){
              if(returnData.status){
                  var temp={
                    id:user.user.uid,
                    Name:returnData.Name,
                    usertype:returnData.usertype,
                    image:returnData.image
                  }
                  this.authe.username=temp.Name;
                  this.authe.setCookie("Auth",JSON.stringify(temp),1);
                  console.log(this.authe.username);
                  
                  this.mystyle={
                    'display':'none'
                  }
                  this.router.navigate(['./menu']);
              }else{
                let config = new MatSnackBarConfig();
                config.duration = true ? 20000 : 0;
                this.snackBar.open("You have not get permision", true ? "OK" : undefined, config);
              }

            }else{
              var temp={
                id:user.user.uid,
                Name:returnData.Name,
                usertype:returnData.usertype,
                image:returnData.image
              }
              this.authe.username=temp.Name;
              this.authe.setCookie("Auth",JSON.stringify(temp),1);
              console.log(this.authe.username);
              
              this.mystyle={
                'display':'none'
              }
              this.router.navigate(['./menu']);
            }
            
            // this.router.navigate(['./dashboard']);
          }
        })
      }).catch(err=>{
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open("Password or Email Incorect..!", true ? "Retry" : undefined, config);
      })
    }
  }
}

// me signout karana eka 
    // this.afAuth.auth.signOut()

    


    







    





 

 