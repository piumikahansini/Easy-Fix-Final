import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {  AngularFireList } from '@angular/fire/database';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private db:AngularFireDatabase) {
    
   }

  ngOnInit() {

  }
  Login(formData){
    var user=null;
    var username=formData.username;
    var psw=formData.psw;
    var object;
    // this.db.list('login', ref => ref.equalTo('Admin')).snapshotChanges().pipe(
    //     map(changes =>
    //       changes.map(c =>
    //         ({ key: c.payload.key, ...c.payload.val() })
    //       )
    //     )
    //   ).subscribe(users => {
    //     object = users;
    //     console.log(object);
    //   });
//     this.db.ref('/login').orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
//       console.log(snapshot.key);
//     });

//     var ref =db().ref("dinosaurs");
// ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
//   console.log(snapshot.key);
// });

    // this.db.list('usernames', ref => ref.equalTo(uid))
  }
    // this.db.


}
