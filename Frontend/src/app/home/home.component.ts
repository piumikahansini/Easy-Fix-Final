import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
// declare var jQuery:any;
// import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactusForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    message: new FormControl('',Validators.required),
    register:new FormControl(false),
  });
  error="";
  emailerr="";
  perror="";
  constructor(
    public snackBar: MatSnackBar,
    private firestore: AngularFirestore,) { }

  ngOnInit() { }
  checkPhone(phone){
    if(phone.indexOf("07")!=0){
      this.perror="Invalid format";
    }else{
      this.perror="";
    }
  }
  checkEmail(email:string){
    if(email==''){
      this.emailerr="This field must be entered";
      return;
    }
    var at=false;
    var dot=false;
    console.log(email);
    if(email.indexOf('@')!=-1){
      at=true;
    }
    if(email.indexOf('.')!=-1){
      dot=true;
    }
    if(dot && at){
      this.emailerr="";
    }else{
      this.emailerr="Please enter valid email";
    }
  }

  Submit
  (){
    console.log(this.contactusForm.value);
    if(this.perror!="" || this.emailerr!=""){
      return;
    }
    if (this.contactusForm.value.email=='' || this.contactusForm.value.name=='' || this.contactusForm.value.message=='' || this.contactusForm.value.phone=='' ) {
        this.error="You must fill every field"
    }else{
      this.error=""
      this.firestore.collection("contactUs").add(this.contactusForm.value).then(()=>{
        let config = new MatSnackBarConfig();
        config.duration = true ? 10000 : 0;
        this.snackBar.open("Your message has been sent successfully.You will be recieve a respond quickly", true ? "Close" : undefined, config);
        location.reload();
      }).catch(err=>{

        })

    }
  }
}
