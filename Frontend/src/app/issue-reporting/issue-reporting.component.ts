import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-issue-reporting',
  templateUrl: './issue-reporting.component.html',
  styleUrls: ['./issue-reporting.component.scss']
})
export class IssueReportingComponent implements OnInit {
  contactusForm = new FormGroup({
    Name: new FormControl(''),
    email: new FormControl(''),
    number: new FormControl(''),
    message: new FormControl(''),
    register:new FormControl(true),
  });
  progressBar=true;
  error="";
  
  constructor(
    public snackBar: MatSnackBar,
    private firestore: AngularFirestore,
    private auth:AuthService,
  ) { }

  ngOnInit() {
    var cookie=JSON.parse(this.auth.getCookie("Auth"));
    console.log(cookie.id)
    this.firestore.collection("users").doc(cookie.id).get().subscribe(data=>{
      var user=data.data();
      console.log(user);
      this.contactusForm = new FormGroup({
        Name: new FormControl(user.Name),
        email: new FormControl(user.email),
        number: new FormControl(user.number),
        message: new FormControl(''),
        register:new FormControl(true),
      });
      this.progressBar=false;
      
    })
  
  }
  Submit(){
    
    console.log(this.contactusForm.value);
    if (this.contactusForm.value.email=='' || this.contactusForm.value.Name=='' || this.contactusForm.value.message=='' || this.contactusForm.value.phone=='') {
        this.error="You must fill every field"
    }else{
      this.error=""
      console.log(this.contactusForm.value);
      this.firestore.collection("contactUs").add(this.contactusForm.value).then(()=>{
        this.contactusForm.patchValue({message:""})
        let config = new MatSnackBarConfig();
        config.duration = true ? 10000 : 0;
        this.snackBar.open("Your message has been sent successfully.You will be recieve a respond quickly", true ? "Close" : undefined, config);
      }).catch(err=>{

        })

    }
  }
}
