import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
// import { FirebaseDatabase} from '@angular/fire';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private firestore: AngularFirestore,private Form:FormBuilder,public afAuth: AngularFireAuth,
    // private db:FirebaseDatabase
    ) { }
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
    // var storageRef = this.db.
    if(form.usertype=="Customer"){
      this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password)
      .then(data=>{
        this.firestore.collection("users").doc(data.user.uid).set({
          phoneNumber:form.number,
          email: form.email,
          FirstName:form.fname,
          LastName:form.lname,
          usertype:form.usertype,
          password:form.password,
          nic:form.nic,
          number:form.number,
          
        }).catch(error=>{
          console.log(error);
        })

      });
    }else if(form.usertype=="Mechanic"){
      this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password)
      .then(data=>{
        this.firestore.collection("users").doc(data.user.uid).set({
          email: form.email,
          FirstName:form.fname,
          LastName:form.lname,
          usertype:form.usertype,
          password:form.password,
          nic:form.nic,
          number:form.number,
          vehicleType:V_Types,
          status:false
        }).catch(error=>{
          console.log(error);
        })

      });
      

    }else if(form.usertype=="Service"){
      this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password)
      .then(data=>{
        this.firestore.collection("users").doc(data.user.uid).set({
          email: form.email,
          FirstName:form.fname,
          LastName:form.lname,
          usertype:form.usertype,
          password:form.password,
          nic:form.nic,
          number:form.number,
          address:form.address,
          registerNumber:form.R_number,
          status:false
        }).catch(error=>{
          console.log(error);
        })

      });
      
    }

   

    // this.db.list('users').push(newUser);
    this.router.navigate(["/"]);

  }

 
  ngOnInit() {
  }

}
