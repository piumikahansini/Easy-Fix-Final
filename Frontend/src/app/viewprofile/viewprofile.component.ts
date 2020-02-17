import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from'@angular/fire/firestore';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private firestore:AngularFirestore,private snackBar:MatSnackBar) { }
  userDeatil;
  flag=false;
  id;
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.firestore.collection("users").doc(this.id).get().subscribe(data=>{
      this.userDeatil=data.data();
      console.log(this.userDeatil);
      this.flag=true;
    })
    
    

  }
  blockUser(){
      this.firestore.collection("users").doc(this.id).update({blockstatus:true}).then(()=>{
        let config = new MatSnackBarConfig();
        config.duration = true ? 10000 : 0;
        this.snackBar.open("Given user has succesfully blocked", true ? "Close" : undefined, config);
        this.ngOnInit();
      }).catch(err=>{
        let config = new MatSnackBarConfig();
        config.duration = true ? 10000 : 0;
        this.snackBar.open(err, true ? "Close" : undefined, config);
      })
  }
  

}
