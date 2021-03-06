import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from 'angularfire2/storage';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  editForm=new FormGroup({
    Name: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl(''),
    nic: new FormControl(''),
    hotline:new FormControl('')
  });
  
  constructor(private auth:AuthService,private db:AngularFirestore,private storage:AngularFireStorage,private snackBar:MatSnackBar) { }

  userDeatil;
  flag=false;
  image:File=null;
  ngOnInit() {
    var mycookie=JSON.parse(this.auth.getCookie("Auth"));
    console.log(mycookie.Firstname);
    this.db.collection("users").doc(mycookie.id).get().subscribe(val=>{
      this.userDeatil=val.data();
      this.userDeatil.id=mycookie.id;
      console.log(this.userDeatil);
      this.editForm=new FormGroup({
        Name: new FormControl(this.userDeatil.Name),
        email: new FormControl(this.userDeatil.email),
        number: new FormControl(this.userDeatil.number),
        nic: new FormControl(this.userDeatil.nic),
        hotline:new FormControl(this.userDeatil.hotline)
      });
      this.flag=true;
    })
      

  }
  fileSelect(img){
    this.image=img.files[0];
    console.log(img.files[0].name)
  }
  updateProfile(){
    console.log(this.editForm.value);
      this.db.collection("users").doc(this.userDeatil.id).update(this.editForm.value).then(()=>{
        if(this.image){
          this.storage.ref('profilepic/'+this.userDeatil.usertype+'/'+this.image.name).put(this.image).then(()=>{
            this.storage.ref('profilepic/'+this.userDeatil.usertype+'/'+this.image.name).getDownloadURL().subscribe(url=>{
              this.db.collection('users').doc(this.userDeatil.id).update({profileImage:url}).then(()=>{
                let config = new MatSnackBarConfig();
                  config.duration = true ? 5000 : 0;
                  this.snackBar.open("Successfully updated", true ? "OK" : undefined, config);
                  location.reload();

              }).catch(err=>{
                  let config = new MatSnackBarConfig();
                  config.duration = true ? 5000 : 0;
                  this.snackBar.open(err, true ? "OK" : undefined, config);
                  
              })
            })
          })
        }else{
                  let config = new MatSnackBarConfig();
                  config.duration = true ? 5000 : 0;
                  this.snackBar.open("Successfully updated", true ? "OK" : undefined, config);
                  location.reload();
        }
      })
    
  }

}
