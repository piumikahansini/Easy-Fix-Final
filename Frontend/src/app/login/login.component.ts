import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { AuthService} from '../auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    private fireauth:AngularFireAuth,
    private db:AngularFirestore,
    private authe:AuthService,
    ) { }

  ngOnInit() { }

  Login(formData){
    
    //when username field empty
    if(formData.email == ''){
      let config = new MatSnackBarConfig();
          config.duration = true ? 2000 : 0;
          this.snackBar.open("Email is empty..! ", true ? "Retry" : undefined, config);
    }     //when password field empty
    else if(formData.psw == ''){
      let config = new MatSnackBarConfig();
      config.duration = true ? 2000 : 0;
      this.snackBar.open("Password is Empty..! ", true ? "Retry" : undefined, config);
    }
    else{
      
      this.fireauth.auth.signInWithEmailAndPassword(formData.email,formData.psw).then(user=>{
        // user is user token
        // user token=user.user.id    //sign in the user with email and password and if there is stored data; they are returend
        this.db.collection("users").doc(user.user.uid).get().subscribe(data=>{
          if(data.exists){
            var returnData=data.data();
            if(returnData.blockstatus){  //blocked users cannot login
              let config = new MatSnackBarConfig();
              config.duration = true ? 20000 : 0;
              this.snackBar.open("You Don't  Have Permision to login. Please contact admin ", true ? "OK" : undefined, config);
              return ;
            }
            if(returnData.usertype == "Service"){
              if(returnData.status){
                  var temp={
                    id:user.user.uid, //token is not a field of document.so it should be get separatly
                    Name:returnData.Name,
                    usertype:returnData.usertype,
                  }
                  this.authe.username=temp.Name;
                  this.authe.setCookie("Auth",JSON.stringify(temp),1); //set cookie
                  // console.log(this.authe.username);
                  let config = new MatSnackBarConfig();
                  config.duration = true ? 20000 : 0;
                  this.snackBar.open("You Have Logged in Succesfully ", true ? "OK" : undefined, config);
                  location.reload();
              }else{
                let config = new MatSnackBarConfig(); //blocked user
                config.duration = true ? 20000 : 0;
                this.snackBar.open("You have not get permision yet", true ? "OK" : undefined, config);
              }

            }else{
              var temp={
                id:user.user.uid,
                Name:returnData.Name,
                usertype:returnData.usertype,
              }
              this.authe.username=temp.Name;
              this.authe.setCookie("Auth",JSON.stringify(temp),1);
              console.log(this.authe.username);
              let config = new MatSnackBarConfig();
              config.duration = true ? 20000 : 0;
              this.snackBar.open("You Have Logged in Succesfully ", true ? "OK" : undefined, config);
              location.reload();
              
            }
          }
        })
      }).catch(err=>{
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open("Password or Email Incorrect..!", true ? "Retry" : undefined, config);
      })
    }
  }
}


    


    







    





 

 