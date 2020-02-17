import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
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
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    message: new FormControl(''),
    register:new FormControl(false),
  });
  error="";
  
  constructor(
    public snackBar: MatSnackBar,
    private firestore: AngularFirestore,) { }

  ngOnInit() {
    // this.auth.Singnout();
    // AOS.init({
    //   duration: 2000,
    // })
  }

  Submit(){
    console.log(this.contactusForm.value);
    if (this.contactusForm.value.email=='' || this.contactusForm.value.name=='' || this.contactusForm.value.message=='' || this.contactusForm.value.phone=='') {
        this.error="You must fill every field"
    }else{
      this.error=""
      this.firestore.collection("contactUs").add(this.contactusForm.value).then(()=>{
        this.contactusForm.reset();
        let config = new MatSnackBarConfig();
        config.duration = true ? 10000 : 0;
        this.snackBar.open("Your message has been sent successfully.You will be recieve a respond quickly", true ? "Close" : undefined, config);
      }).catch(err=>{

        })

    }
  }
}
