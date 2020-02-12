import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AuthService} from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register-requests',
  templateUrl: './register-requests.component.html',
  styleUrls: ['./register-requests.component.scss']
})
export class RegisterRequestsComponent implements OnInit {
  loggin="Loging";
  users=[];
  temp=[];
  panelOpenState = false;

  constructor(private auth:AuthService,private db:AngularFirestore) { }

  ngOnInit() {
    this.db.collection('users').snapshotChanges().forEach(data=>{
      
      this.temp=data;
      this.users=[];
      this.temp.forEach(val=>{
        console.log(val);
        
        var user={
                  id:val.payload.doc.id,
                  data:val.payload.doc.data()
        }
        // console.log(user);
        // if(user.data.status===false){
          this.users.push(user);
        // }
      })
    });
  }
  approve(id){
    console.log(id);
    this.users=[];
    this.db.collection("users").doc(id).update({
      status:true
    })
  }
  delete(id){
    this.db.collection("users").doc(id).delete();
  }
}


