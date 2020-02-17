import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from'@angular/fire/firestore';
import {MatTableDataSource} from '@angular/material/table';
export interface User {
  message:string,
  email: string,
  name:string,
  number:string,
  id:string,
  
}
@Component({
  selector: 'app-issue-handling',
  templateUrl: './issue-handling.component.html',
  styleUrls: ['./issue-handling.component.scss']
})
export class IssueHandlingComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone','message','id'];
  dataSource;
  allData;
  issueDetailsRegister=[];
  issueDetailsUnregister=[];
  constructor(
    private auth:AuthService,private db:AngularFirestore,
  ) { }
  submit(element){
    console.log(element)
  }
  delete(id){
    
    this.db.collection("contactUs").doc(id).delete().then(()=>{

    }).catch(()=>{

    });
  }
  

  ngOnInit() {
      
    this.db.collection("contactUs").snapshotChanges().subscribe(val=>{
      this.allData=val;
      this.issueDetailsRegister=[];
      this.issueDetailsUnregister=[];
      this.allData.forEach(element => {
        if (element.payload.doc.data().register==true) {
          var a:User;
          a=element.payload.doc.data()
          a.id=element.payload.doc.id;
          this.issueDetailsRegister.push(a);

          // console.log(this.issueDetailsRegister)
        }else{
          var a:User;
          a=element.payload.doc.data()
          a.id=element.payload.doc.id;
          // this.issueDetailsRegister.push(a);
          this.issueDetailsUnregister.push(a);
          // console.log(this.issueDetailsUnregister)
        }
      })
      
    })

    
   
  }
  
    
    

  

  
}
