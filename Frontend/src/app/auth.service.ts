import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  token;
  logingStatus=false;
  constructor(
    public snackBar: MatSnackBar,
    ) { 
      if(this.getCookie("Auth")==''){
        this.logingStatus=false;
        
      }else{
        this.logingStatus=true;
      }
    
    
  }
  
  
  setCookie(name:string,value:string,expireDate:number,path:string=''){
    this.logingStatus=true;
    let nowdate:Date=new Date();
    nowdate.setDate(nowdate.getDate()+expireDate);
    let expire:string=`[expire]=${nowdate.toString()}`;
    console.log(nowdate.toString());
    let   cpath:string=path ? `;path=${path}`:'';
    document.cookie=`${name}=${value};${expire}${cpath}`;
  }
  getCookie(name:string){
    let data:Array<string>=document.cookie.split(';');
    let caLen:number=data.length;
    let cookieName=`${name}=`;
    let c:string;
    for(let i:number=0;i<caLen;i++){
      c=data[i].replace(/^\s+/g,'');
      if(c.indexOf(cookieName)==0){
        return c.substring(cookieName.length,data.length);
      }
    }
    return '';9
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

 