import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {FormBuilder} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
// import { FirebaseDatabase} from '@angular/fire';
import { Observable } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage } from 'angularfire2/storage';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,
    private firestore: AngularFirestore,
    private Form:FormBuilder,
    public afAuth: AngularFireAuth,
    private afstorage:AngularFireStorage,
    public snackBar: MatSnackBar,
    ) { }
  error="This field must be entered";
  image:File=null;
  NICcopy:File=null;
 
  // select vehicle type
  disableSelect = new FormControl(false);
  vehicleType = new FormControl();
  vehicleTypeList: string[] = ['Motor Bike','Three-Wheeler','Car', 'Van','Jeep'];

  //vehicle type feild validation
  email = new FormControl('', [Validators.required, Validators.email]);
  items: Observable<any[]>;
  getErrorEmail() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  } 

  fileSelect(event){
    this.image=event.target.files[0];
    console.log(this.image.name);
  }
  NICSelect(event){
    this.NICcopy=event.target.files[0];
    console.log(this.image.name);
  }

  Register(form ,V_Types){
      
    if(form.usertype=="Customer"){
      this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password).
      then(data=>{
        if(this.image!=null){
          this.afstorage.ref('profilepics/customer/'+this.image.name).put(this.image).then(image=>{
            this.afstorage.ref('profilepics/customer/'+this.image.name).getDownloadURL().subscribe(url=>{
              this.firestore.collection("users").doc(data.user.uid).set({
                
                email: form.email,
                Name:form.name,
                usertype:form.usertype,
                nic:form.nic,
                number:form.number,
                profileImage:url
                
                
              }).then(data=>{
                this.router.navigate(["/"]);
                let config = new MatSnackBarConfig();
                config.duration = true ? 10000 : 0;
                this.snackBar.open("You have registered successfully.Please login now", true ? "Retry" : undefined, config);
              })
              .catch(error=>{
                console.log(error);
              })
            })

          }).catch(error=>{
            console.error(error);
          })
        }else{

        }
      })
      .catch(error=>{
        let config = new MatSnackBarConfig();
        config.duration = true ? 2000 : 0;
        this.snackBar.open(error, true ? "Retry" : undefined, config);
      })      
    }else if(form.usertype=="Mechanic"){
      this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password).
      then(data=>{
        if(this.image!=null){
          this.afstorage.ref('profilepics/mechanic/'+this.image.name).put(this.image).then(image=>{
            this.afstorage.ref('profilepics/mechanic/'+this.image.name).getDownloadURL().subscribe(imgurl=>{    
              this.afstorage.ref('nic/'+this.NICcopy.name).put(this.NICcopy).then(a=>{
                  this.afstorage.ref('nic/'+this.NICcopy.name).getDownloadURL().subscribe(nicurl=>{
                    this.firestore.collection("users").doc(data.user.uid).set({
                      email: form.email,
                      Name:form.name,
                      usertype:form.usertype,
                      nic:form.nic,
                      number:form.number,
                      hybrid:form.Hybrid,
                      nonhybrid:form.Non,
                      vehicleType:V_Types,
                      status:false,
                      profileImage:imgurl,
                      NICcopy:nicurl,
                  }).then(user=>{
                    this.router.navigate(["/"]);
                    let config = new MatSnackBarConfig();
                    config.duration = true ? 10000 : 0;
                    this.snackBar.open("Yor request have been sent. Please wait for a confirmation", true ? "Retry" : undefined, config);
                  })
                  .catch(err=>{
                    console.error(err);
                  })

                  })
              })
            })  

          }).catch(err=>{
            console.error(err);
          })
        }
      })
      .catch(error=>{
        console.error(error);
        return;
      })

    }else if(form.usertype=="Service"){
      this.afAuth.auth.createUserWithEmailAndPassword(form.email,form.password)
      .then(data=>{
        if(this.image!=null){
          this.afstorage.ref('regCertificate/'+this.image.name).put(this.image).then(image=>{
            this.afstorage.ref('regCertificate/'+this.image.name).getDownloadURL().subscribe(regurl=>{
              this.firestore.collection("users").doc(data.user.uid).set({
                email: form.email,
                Name:form.name,
                usertype:form.usertype,
                hybrid:form.Hybrid,
                nonhybrid:form.Non,
                number:form.number,
                address:form.address,
                registerNumber:form.R_number,
                vehicleType:V_Types,
                certificate_img:regurl,  
                hotline:form.hotline, 
                status:false
              }).then(user=>{
                this.router.navigate(["/"]);
                let config = new MatSnackBarConfig();
                config.duration = true ? 10000 : 0;
                this.snackBar.open("Yor request have been sent. Please wait for a confirmation", true ? "Retry" : undefined, config);
              })
            })
          }

          )
        }
      }).catch(error=>{
        console.error(error);
        return;
      }
      );
      
    }

   

    
    

  }

 
  ngOnInit() {
  }

}
