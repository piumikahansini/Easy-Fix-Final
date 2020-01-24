import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.scss']
})
export class CustomerServiceComponent implements OnInit {
  data;
  constructor(private db: AngularFirestore,private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.db.collection('mechanic').valueChanges().subscribe(val => {
      this.data = val;
    });
  }

}
