import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {AuthService} from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar, MatSnackBarConfig, MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-register-requests',
  templateUrl: './register-requests.component.html',
  styleUrls: ['./register-requests.component.scss']
})
export class RegisterRequestsComponent implements OnInit {
  loggin="Loging";
  
  mechanics=[];
  serviceCenters=[];
  temp=[];
  panelOpenState = false;
  user={
    Firstname:"Piumika",

  }

  constructor(
    private auth:AuthService,private db:AngularFirestore,
    public snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.db.collection('users').snapshotChanges().forEach(data=>{
      
      this.temp=data;
      this.mechanics=[];
      this.serviceCenters=[];
      this.temp.forEach(val=>{
        
        
        var user={
                  id:val.payload.doc.id,
                  data:val.payload.doc.data()
        }
        // console.log(user);
        if(user.data.status===false){
          console.log(user);
          if(user.data.usertype == "Mechanic"){
            console.log(user);
            this.mechanics.push(user);
          }else if(user.data.usertype == "Service"){
            console.log(user);
            this.serviceCenters.push(user);

          }
         
        }
      })
    });
  }
  approve(id){
    console.log(id);
    //this.users=[];
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: {
          message: 'Are you sure want to Accept the Request?',
          buttonText: {
            ok: 'Yes',
            cancel: 'No'
          }
        }
      });
      dialogRef.afterClosed().subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.db.collection("users").doc(id).update({
            state:true
          })
        }
      });



  }
  delete(id){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Are you sure want to Accept the Requests?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.db.collection("users").doc(id).delete();
      }
    });
    
  }
}


