import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AngularFirestore } from'@angular/fire/firestore';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
export interface User{
  id:string,
  email: string,
  Name:string,
  usertype:string,
  nic:string,
  number:string,
  hybrid:string,
  nonhybrid:string,
  vehicleType:string,
  status:string,
  profileImage:string,
  NICcopy:string,
}

@Component({
  selector: 'app-view-service-centers',
  templateUrl: './view-service-centers.component.html',
  styleUrls: ['./view-service-centers.component.scss']
})
export class ViewServiceCentersComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'email', 'usertype','id'];
  dataSource ;
  allData;
  userDetails=[];
  flag=false;
  ID=[];
  constructor(
    private auth:AuthService,
    private db:AngularFirestore,
    private router:Router,
  ) { }
  gotoProfile(id){
    this.router.navigate(['./dashboard/viewprofile/'+id]);
  }

  ngOnInit() {
    var mycookie=JSON.parse(this.auth.getCookie("Auth"));
    console.log(mycookie.Firstname);
    this.db.collection("users").snapshotChanges().subscribe(val=>{
      this.allData=val;
      console.log(val)
      this.userDetails=[];
      this.allData.forEach(element => {
        var temp:User;
        if(element.payload.doc.data().usertype == "Service"){
          temp=element.payload.doc.data();
          temp.id=element.payload.doc.id;
          this.userDetails.push(temp);
        }
        
      });
      console.log(this.userDetails);
      this.dataSource= new MatTableDataSource(this.userDetails);
      this.flag=true;
    }); 
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
