import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { AngularFirestore } from'@angular/fire/firestore';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
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
  displayedColumns: string[] = ['Name', 'email', 'usertype'];
  dataSource ;
  allData;
  userDetails=[];
  flag=false;
  ID=[];
  constructor(
    private auth:AuthService,
    private db:AngularFirestore
  ) { }

  ngOnInit() {
    var mycookie=JSON.parse(this.auth.getCookie("Auth"));
    console.log(mycookie.Firstname);
    this.db.collection("users").snapshotChanges().subscribe(val=>{
      this.allData=val;
      console.log(val)
      this.userDetails=[];
      this.allData.forEach(element => {
        console.log(element)
        var temp:PeriodicElement;
        this.ID.push(element.payload.doc.id);
        temp=element.payload.doc.data();
        this.userDetails.push(temp);
        
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
