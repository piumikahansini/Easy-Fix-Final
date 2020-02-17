import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from'@angular/fire/firestore';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.scss']
})
export class ViewprofileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private firestore:AngularFirestore) { }
  userDeatil;
  flag=false;
  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id');
    this.firestore.collection("users").doc(id).get().subscribe(data=>{
      this.userDeatil=data.data();
      console.log(this.userDeatil);
      this.flag=true;
    })
    

  }

}
