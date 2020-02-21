import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AngularFirestore } from'@angular/fire/firestore';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
export interface User {
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
}

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})

export class ViewCustomerComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'email', 'usertype','id'];
  dataSource ;
  allData;
  userDetails=[];
  flag=false;
  ID=[];
  constructor(
    private auth:AuthService,
    private db:AngularFirestore,
    private router:Router
  ) { }
  
    
  ngOnInit() {
    var mycookie=JSON.parse(this.auth.getCookie("Auth"));
    console.log(mycookie.Firstname);
    this.db.collection("users").snapshotChanges().subscribe(val=>{
      this.allData=val;
      this.userDetails=[];
      this.allData.forEach(element => {
        if(element.payload.doc.data().usertype == "Customer" && element.payload.doc.data().blockstatus==false){
          var temp:User;
          temp=element.payload.doc.data();
          temp.id=element.payload.doc.id;
          console.log(temp)
          this.userDetails.push(temp);
        }
       
        
      });
      this.dataSource= new MatTableDataSource(this.userDetails);
      this.flag=true;
    }); 
  }
  gotoProfile(id){
    this.router.navigate(['./dashboard/viewprofile/'+id]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
