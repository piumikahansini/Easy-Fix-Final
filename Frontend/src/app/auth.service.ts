import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private expireDate;
  userData;
  token;
  constructor(
    private db:AngularFirestore,
    private afAuth:AngularFireAuth
    ) { 
    if(localStorage.getItem("expireDate")){
      var datestring=localStorage.getItem("expireDate")
      var datearr=datestring.split("-");
      this.expireDate=new Date(
                                Number(datearr[0]),//yyyy
                                Number(datearr[1]),//mm
                                Number(datearr[2]),//dd
                                Number(datearr[3]),//hh
                                Number(datearr[4]),//min
                                Number(datearr[5])//sec
                              );

      var nowDate=new Date();
      if(nowDate>this.expireDate){
        window.localStorage.clear();
        this.token=null;
      }
    }
    
    
  }
  getName(){
    name
  }
  Singnout(){
    this.afAuth.auth.signOut();
    window.localStorage.clear();
    this.expireDate=this.token=this.userData=null;
  }
  // createaaaa(){
    
  //   return cookiedate;
  // }
  

  SignIn(email,password){
    this.afAuth.auth.signInWithEmailAndPassword(email,password).
      then(user=>{
        // console.log(user.user)
        console.log(user.user.uid);
        this.token=user.user.uid;
        this.db.collection("users").doc(this.token).get().subscribe(function(doc){
          if(doc.exists){
            console.log(JSON.stringify(doc.data()));
            var logedtime=new Date();
            logedtime.setDate(logedtime.getDate()+1);
            var date=(logedtime.getDate()).toString();
            var year=(logedtime.getFullYear()).toString();
            var month=(logedtime.getMonth()).toString();
            var hour=(logedtime.getHours()).toString();
            var min=(logedtime.getMinutes()).toString();
            var sec=(logedtime.getSeconds()).toString();
            var expiredateasstr=year+"-"+month+"-"+date+"-"+hour+"-"+min+"-"+sec;
            console.log(expiredateasstr);

            localStorage.setItem("expireDate",expiredateasstr);
            localStorage.setItem("email",doc.data().email);
            localStorage.setItem("fname",doc.data().FirstName);
            localStorage.setItem("lname",doc.data().LastName);
            localStorage.setItem("usertype",doc.data().usertype);
            console.log("hiii")
            return true;
          }else{
            console.log("errorr");
            return false;
          }  
        })
        
      })
      .catch(error=>console.log(error));
      return false;
    
  }
  
}
 // (YYYY, MM, DD, Hr, Min, Sec) 

 