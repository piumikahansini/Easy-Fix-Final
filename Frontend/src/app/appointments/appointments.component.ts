import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from "../Customer";


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements OnInit {
  items = [];
  constructor(private db: AngularFirestore) { 

  }

  ngOnInit() {
    this.db.collection('mechanic_requests')
    .snapshotChanges().subscribe(serverItems => {
      this.items = [];
      serverItems.forEach(a => {
        let item:any = a.payload.doc.data();
        item.id = a.payload.doc.id;
        this.items.push(item);
      });
    });
  }

  update(item) {
    this.db.collection('mechanic_requests').doc(item.id).update({
      confirmed: true,
    });
  }

  delete(item) {
    this.db.collection('mechanic_requests').doc(item.id).delete();
  }

export class AppointmentsComponent implements OnInit {

  constructor(private db:AngularFirestore) { }


  ngOnInit() { }
}

