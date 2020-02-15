import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
 
  constructor(private auth:AuthService,private db:AngularFirestore) { }
  userDeatil;
  flag=false;
  ngOnInit() {
    var mycookie=JSON.parse(this.auth.getCookie("Auth"));
    console.log(mycookie.Firstname);
    this.db.collection("users").doc(mycookie.id).get().subscribe(val=>{
      this.userDeatil=val.data();
      console.log(this.userDeatil);
      this.flag=true;
    })


  }

}
