import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FormBuilder,Validator} from '@angular/forms';
// import {AngularFireDatabase} from 'angularfire2/database';
// import { AngularFirestore } from "angularfire2/firestore";
import { Customer } from './Customer';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private firestore: AngularFirestore,private Form:FormBuilder) {}
  error="This field must be entered";
  
  // select vehicle type
  vehicleType = new FormControl();
  vehicleTypeList: string[] = ['Motor Bike','Three-Wheeler','Car', 'Van','Jeep'];

  //vehicle type feild validation
 // vehicleType = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  // name = new FormControl('', [Validators.required, Validators.name]);
  items: Observable<any[]>;
  getErrorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  // getErrorName() {
  //   return this.name.hasError('required') ? 'You must enter a value' :
  //       this.name.hasError('name') ? 'Not a valid email' :
  //           '';
  // }

 

  Register(form,V_Types){
    console.log(form);
    // var newUser=new Customer();
    // newUser.email=form.email;
    // newUser.name=form.name;
    // newUser.usertype=form.usertype;
    // newUser.password=form.password;
    // newUser.nic=form.nic;
    // newUser.number=form.number;
    if(form.usertype=="Customer"){
      this.firestore.collection("users").doc(form.number).set({

        email: form.email,
        "First Name":form.fname,
        "Last Name":form.lname,
        usertype:form.usertype,
        password:form.password,
        nic:form.nic,
        number:form.number
      });

    }else if(form.usertype=="Mechanic"){
      this.firestore.collection("users").doc(form.number).set({
        email: form.email,
        "First Name":form.fname,
        "Last Name":form.lname,
        usertype:form.usertype,
        password:form.password,
        nic:form.nic,
        number:form.number,
        vehicleType:V_Types,
      });

    }else if(form.usertype=="Service"){
      this.firestore.collection("users").doc(form.number).set({
        email: form.email,
        "First Name":form.fname,
        "Last Name":form.lname,
        usertype:form.usertype,
        password:form.password,
        nic:form.nic,
        number:form.number,
        address:form.address,
        registerNumber:form.R_number
      });
      
    }

   

    // this.db.list('users').push(newUser);
    this.router.navigate(["/"]);

  }

  ngOnInit() {
  }

}
