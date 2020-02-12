import { Component, OnInit } from '@angular/core';
import {NavbarModule} from 'angular-bootstrap-md';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
      private auth:AuthService
    ) { }

  ngOnInit() {
    console.log(this.auth.getCookie("Auth"))
  }

}
