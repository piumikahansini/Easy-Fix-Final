import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Customer } from "../Customer";


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})

export class AppointmentsComponent implements OnInit {

  constructor(private db:AngularFirestore) { }

  ngOnInit() { }
}

